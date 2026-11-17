// Shared chart components for the "Guess first" videos. Video agent, 2026-11-17. Styles in charts.css.
// Every component is drawn as a pure function of t (seconds from the start of the video): no CSS animation,
// no timers. The page's window.seek(t) must call Charts.seek(t); render.js then captures it frame by frame.
// Each builder takes a container element and an options object and returns nothing. Common options:
//   start (s, when the reveal begins), dur (s, how long one mark takes; default 1.2), decimals, unit.
// Values passed in are the truth: the last frame shows exactly the value given, formatted, not a rounded tween.
//   Charts.bars(el,{items:[{label,value,hit}],max,unit,decimals,start,stagger})          up to 5 rows
//   Charts.dotGrid(el,{total,filled,cols,of,start,dur})                                   e.g. 37 of 100
//   Charts.scale(el,{items:[{label,value,hit}],unit,ticks:[..],decimals,start,stagger})   up to 3 shapes, short labels
//   Charts.timeline(el,{from,to,events:[{at,label,hit}],start,dur})                       up to 5 events
//   Charts.counter(el,{to,from,decimals,prefix,suffix,unit,note,start,dur})
// scale and timeline measure the container when built: give it a fixed height (flex:1 in the frame is fine)
// and build after fonts are ready (document.fonts.ready).
(function(){
const clamp=x=>Math.min(1,Math.max(0,x));
const ease=x=>1-Math.pow(1-clamp(x),3);
const fmt=(v,d)=>Number(v).toLocaleString('en-US',{minimumFractionDigits:d||0,maximumFractionDigits:d||0});
const el=(tag,cls,text,parent)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;if(parent)parent.appendChild(e);return e};
const px=(e,o)=>{for(const k in o)e.style[k]=o[k]+'px'};
const seekers=[];
// number shown while a mark grows: tweened, but exactly `to` once the mark is done
const tween=(p,from,to,d)=>fmt(p>=1?to:from+(to-from)*p,d);

function bars(root,o){
  const dur=o.dur||1.2,start=o.start||0,stag=o.stagger==null?.15:o.stagger,max=o.max||Math.max(...o.items.map(i=>i.value));
  root.classList.add('ch','ch-bars');
  const rows=o.items.map(it=>{
    const row=el('div','row',null,root),lab=el('div','lab',null,row);el('span','name',it.label,lab);
    const val=el('span','val mono','',lab),fill=el('div','fill',null,el('div','track',null,row));
    return {it,row,val,fill};
  });
  seekers.push(t=>rows.forEach((r,i)=>{
    const p=ease((t-start-i*stag)/dur);
    r.fill.style.width=(p*r.it.value/max*100)+'%';
    r.val.textContent=tween(p,0,r.it.value,o.decimals)+(o.unit||'');
    r.row.classList.toggle('hit',!!r.it.hit&&p>=1);            // the answer lights up only after its bar has stopped
  }));
}

function dotGrid(root,o){
  const total=o.total||100,cols=o.cols||10,rowsN=Math.ceil(total/cols),dur=o.dur||1.6,start=o.start||0;
  root.classList.add('ch','ch-dots');
  const head=el('div','head',null,root),n=el('span','n','0',head);el('span','of',o.of||('in '+fmt(total)),head);
  const grid=el('div','grid',null,root);
  n.textContent=fmt(o.filled);
  const availH=(root.clientHeight||9999)-head.offsetHeight-28,cell=Math.floor(Math.min(root.clientWidth/cols,availH/rowsN));
  grid.style.gridTemplateColumns=`repeat(${cols},${cell}px)`;grid.style.gridAutoRows=cell+'px';
  const dots=[];for(let i=0;i<total;i++){const d=el('div','dot',null,grid);px(d,{width:Math.round(cell*.74),height:Math.round(cell*.74)});dots.push(d)}
  seekers.push(t=>{
    const p=clamp((t-start)/dur),k=p>=1?o.filled:Math.floor(p*o.filled);   // linear: one dot after another reads as counting
    dots.forEach((d,i)=>d.classList.toggle('on',i<k));n.textContent=fmt(k);
  });
}

function scale(root,o){
  const dur=o.dur||1.2,start=o.start||0,stag=o.stagger==null?.5:o.stagger,items=o.items;
  root.classList.add('ch','ch-scale');
  const W=root.clientWidth,H=root.clientHeight,nameH=110,valH=64,top=valH+8,groundY=H-nameH-16;
  const ticks=o.ticks||[],maxV=Math.max(...items.map(i=>i.value),...ticks),k=(groundY-top)/maxV;
  // ruler labels are bare numbers (the unit is on the values) so the shapes keep the width; the ruler is as wide as its longest label
  const tks=ticks.map(v=>{const tk=el('div','tick mono',fmt(v,o.decimals),root);px(tk,{top:groundY-v*k});return tk});
  const rulerW=tks.length?Math.max(...tks.map(t=>t.offsetWidth))+26:10;
  const slot=(W-rulerW)/items.length,shapeW=Math.min(150,slot*.6);
  ticks.forEach(v=>{const y=groundY-v*k;
    if(v>0){const r=el('div','rule',null,root);px(r,{left:rulerW-10,width:W-rulerW+10,top:y-1})}});
  px(el('div','ground',null,root),{left:rulerW-10,width:W-rulerW+10,top:groundY-2});
  const parts=items.map((it,i)=>{
    const cx=rulerW+slot*(i+.5);
    const s=el('div','shape'+(it.hit?' hit':''),null,root);px(s,{left:cx-shapeW/2,width:shapeW});
    const vb=el('div','val mono',null,root),v=el('span','','',vb);px(vb,{left:cx-slot/2,width:slot});
    const nm=el('div','name'+(it.hit?' hit':''),it.label,root);px(nm,{left:cx-slot/2+6,width:slot-12,top:groundY+16});
    return {it,s,v,vb};
  });
  seekers.push(t=>parts.forEach((p,i)=>{
    const q=ease((t-start-i*stag)/dur),h=q*p.it.value*k;
    px(p.s,{top:groundY-h,height:h});
    p.vb.style.opacity=q>0?1:0;px(p.vb,{top:groundY-h-valH+6});
    p.v.textContent=tween(q,0,p.it.value,o.decimals)+(o.unit||'');
  }));
}

function timeline(root,o){
  const dur=o.dur||2.4,start=o.start||0,span=o.to-o.from;
  root.classList.add('ch','ch-time');
  const W=root.clientWidth,H=root.clientHeight,axisX=170,pad=30,len=H-2*pad,evH=112,evX=axisX+70;
  const axis=el('div','axis',null,root);px(axis,{left:axisX-3,top:pad,height:len});const ink=el('i',null,null,axis);
  [[o.from,pad],[o.to,pad+len]].forEach(([v,y])=>{const e=el('div','end mono',String(v),root);px(e,{top:y,width:axisX-34})});
  const evs=o.events.slice().sort((a,b)=>a.at-b.at).map(ev=>({ev,y:pad+(ev.at-o.from)/span*len}));
  // label positions: at the dot when there is room, otherwise pushed apart (down, then back up from the bottom)
  evs.forEach((e,i)=>{e.ly=Math.max(e.y,i?evs[i-1].ly+evH+10:evH/2)});
  for(let i=evs.length-1;i>=0;i--){const lim=i===evs.length-1?H-evH/2:evs[i+1].ly-evH-10;if(evs[i].ly>lim)evs[i].ly=lim}
  evs.forEach(e=>{
    const hit=e.ev.hit?' hit':'';
    e.link=el('div','link',null,root);const dx=evX-16-axisX,dy=e.ly-e.y;
    px(e.link,{left:axisX,top:e.y-1.5,width:Math.hypot(dx,dy)});e.link.style.transform=`rotate(${Math.atan2(dy,dx)}rad)`;
    e.dot=el('div','dot'+hit,null,root);px(e.dot,{left:axisX,top:e.y});
    e.box=el('div','ev'+hit,null,root);px(e.box,{left:evX,width:W-evX,top:e.ly-evH/2,height:evH});
    el('div','when mono',String(e.ev.when||e.ev.at),e.box);el('div','what',e.ev.label,e.box);
    e.p=(e.y-pad)/len;
  });
  seekers.push(t=>{
    const p=clamp((t-start)/dur);ink.style.height=(p*100)+'%';          // linear: the line is the clock
    evs.forEach(e=>{const on=p>=e.p&&t>=start,a=on?clamp((t-start-e.p*dur)/.25):0;
      e.dot.style.opacity=on?1:0;e.link.style.opacity=a;e.box.style.opacity=a});
  });
}

function counter(root,o){
  const dur=o.dur||1.5,start=o.start||0,from=o.from||0;
  root.classList.add('ch','ch-count');
  const big=el('div','big',null,root);if(o.prefix)el('span','fix',o.prefix,big);const n=el('span','',fmt(from,o.decimals),big);if(o.suffix)el('span','fix',o.suffix,big);
  const rule=el('div','rule',null,root);
  if(o.unit)el('div','unit',o.unit,root);if(o.note)el('div','note',o.note,root);
  // size the number so the final value fits the container width, whatever its length
  n.textContent=fmt(o.to,o.decimals);const w=big.scrollWidth,cw=root.clientWidth;if(w>cw)big.style.fontSize=Math.floor(220*cw/w)+'px';
  seekers.push(t=>{const p=ease((t-start)/dur);n.textContent=tween(p,from,o.to,o.decimals);rule.style.width=(p*100)+'%'});
}

window.Charts={bars,dotGrid,scale,timeline,counter,seek:t=>seekers.forEach(f=>f(t))};
})();
