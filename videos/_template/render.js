#!/usr/bin/env node
// Render an HTML animation to a vertical MP4, frame by frame. Video agent, 2026-11-17.
//   node render.js <page.html> <out.mp4> [--duration 5] [--fps 30] [--crf 18] [--format jpeg|png] [--query "theme=paper"]
// The page must define window.renderAt(t) (see frame.html). Each frame: renderAt(t), screenshot, piped straight
// into ffmpeg (no frame files on disk). Output is exact: every frame is drawn at its own timestamp, so the
// result does not depend on how fast the container is. Needs playwright and ffmpeg, both already in the container.
const {chromium}=require('playwright');const {spawn}=require('child_process');const path=require('path');const fs=require('fs');
const args=process.argv.slice(2);const pos=[];const opt={fps:30,crf:18,format:'jpeg',query:''};
for(let i=0;i<args.length;i++){if(args[i].startsWith('--'))opt[args[i].slice(2)]=args[++i];else pos.push(args[i])}
if(pos.length<2){console.error('usage: node render.js <page.html> <out.mp4> [--duration s] [--fps n] [--crf n] [--format jpeg|png] [--query "a=b"]');process.exit(2)}
const W=1080,H=1920;
(async()=>{
  const t0=Date.now();
  const browser=await chromium.launch();
  const page=await browser.newPage({viewport:{width:W,height:H},deviceScaleFactor:1});
  await page.addInitScript(()=>{window.__render=true});
  await page.goto('file://'+path.resolve(pos[0])+(opt.query?'?'+opt.query:''));
  await page.evaluate(()=>document.fonts.ready);
  if(!(await page.evaluate(()=>typeof window.renderAt==='function')))throw new Error('page has no window.renderAt(t)');
  const duration=Number(opt.duration||await page.evaluate(()=>document.documentElement.dataset.duration)||5);
  const fps=Number(opt.fps),n=Math.round(duration*fps);
  const ff=spawn('ffmpeg',['-y','-loglevel','error','-f','image2pipe','-framerate',String(fps),'-c:v',opt.format==='png'?'png':'mjpeg','-i','-',
    '-c:v','libx264','-preset','medium','-crf',String(opt.crf),'-pix_fmt','yuv420p','-vf','scale=out_color_matrix=bt709:out_range=tv','-color_primaries','bt709','-color_trc','bt709','-colorspace','bt709','-color_range','tv',
    '-movflags','+faststart','-an',pos[1]],{stdio:['pipe','inherit','inherit']});
  const done=new Promise((res,rej)=>ff.on('close',c=>c===0?res():rej(new Error('ffmpeg exit '+c))));
  for(let f=0;f<n;f++){
    await page.evaluate(t=>window.renderAt(t),f/fps);
    const buf=await page.screenshot(opt.format==='png'?{type:'png'}:{type:'jpeg',quality:95});
    if(!ff.stdin.write(buf))await new Promise(r=>ff.stdin.once('drain',r));
  }
  ff.stdin.end();await done;await browser.close();
  const s=(Date.now()-t0)/1000;
  console.log(`${pos[1]}: ${n} frames, ${duration}s at ${fps}fps, ${(fs.statSync(pos[1]).size/1024).toFixed(0)} KB, rendered in ${s.toFixed(1)}s (${(s/duration).toFixed(1)}x real time)`);
})().catch(e=>{console.error(e);process.exit(1)});
