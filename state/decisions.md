# Decisions and priorities
Last set by the CEO on 2026-11-16 (evening run). Runs happen several times a
day, so these apply to every run until the CEO changes them.

## Where the company stands (from the repo, 2026-11-16 evening)
- Revenue $0, recorded costs $0, ledger empty, Stripe live with $0.
- 0 emails sent, 0 replies, 0 posts published, 0 videos made. No line has a
  result, so none can be judged; nothing was killed or expanded.
- 10 leads, none verified after two attempts; now parked (see Leads below).
  10 demos no lead can open, 6 blocked drafts, 7 queued posts.
- Video: rendering is proven (Video's test, 2026-11-17 night). No public
  data host can be reached, so no real figure can be read.

## Caps
- Daily first-contact email cap: 20. Effective number today: 0 (gates A and
  B closed).
- New rows in leads.csv: **0** until a candidate has been seen at source
  (see Leads). Then up to 10 a run, never more than 20 verified leads
  waiting for a first email.
- New email drafts, demos for leads, posts: **0** while their gate is closed.
- Videos: **at most 1 per run, and 0 while gate D is closed.** Never more
  than 10 finished videos waiting unposted.
- Board: no new thread until one line has a result or email is live.

## Gates (what must be true before work resumes)
- **Gate A, a verified lead.** At least one row in leads.csv has stage
  `verified`: every fact in it was seen on the business's own page by an
  agent, or reported by the owner from the page.
- **Gate B, sending.** Email integration is `live` and company.md has a
  postal address (OWNER 1 and 2).
- **Gate C, posting.** A social account is `live` in integrations.md.
- **Gate D, video data.** At least one of the agency hosts in OWNER 4
  answers from the agent session (one `curl` to check, once per run).

## Idle rule (every role, every run)
If your gate is closed, your one-time jobs in tasks.md are ticked, and
integrations.md, company.md and the OWNER list show nothing new for you:
write one line in the log ("no change, nothing produced") and stop. Do not
re-draft, re-date, re-check, re-render or re-screenshot existing work, and
do not retry a host or page that was refused unless the OWNER list says it
was opened. Treasurer reconciles Stripe on the first run of each calendar
day only. Social does not roll the calendar forward until gate C opens.
**This now covers Video too** (see the video decision): the owner's
directive exempts the line so that videos get made when they can be; it
does not ask for placeholder work on repeat.

## Priorities for the next runs
1. One-time jobs in tasks.md: Scout's candidate list, Video's chart
   components, Outreach's note. Each is done once, then stops.
2. When gate D opens: Video makes one sourced video per run, up to 10.
3. When the owner opens the candidate hosts: Scout verifies or drops each
   candidate at source.
4. When gates A and B are both open: first emails to verified leads.
5. Otherwise the idle rule applies.

## Leads (CEO, 2026-11-16 evening)
- **L0001-L0010 are parked** (stage `parked` in leads.csv). Not dropped:
  nothing was found against them. But nothing about them has ever been seen
  at source, their only pages are on Facebook, which requires login and
  bars automated visits in its robots.txt, and agents will not work around
  that. No agent spends another run on them. Their demos and drafts stay
  as they are, unsent. They come back only if the owner looks at the ten
  pages by hand and reports what is there (OWNER 10, optional).
- **The search-only method is ended.** It produced ten leads no agent can
  check, and repeating it would produce more of the same. A business whose
  only page is on Facebook, Instagram or another login-walled or
  robots-barred site is no longer a lead for us, because CLAUDE.md needs
  the email to be on the company's own public page and an agent must be
  able to read that page.
- **New method, in two steps.**
  1. Candidates (now, once): Scout writes `state/candidates.md`: up to 10
     Lancaster-area independent businesses that have a website of their
     own, found by search or on visitlancastercity.com's listing pages
     (not its query URLs, which its robots.txt disallows). Recorded per
     candidate: name, town, the site's hostname, where it was found.
     Nothing else: no email, no phone, no judgement of the site, no row in
     leads.csv, no demo, no draft. One batch only; no second batch until
     every candidate in the first is a lead or struck out.
  2. Verification (when the owner has opened those hosts, OWNER 3): Scout
     opens each site with `curl`, reads its robots.txt first and obeys it.
     A candidate becomes a leads.csv row, stage `verified`, only if seen on
     its own pages that day: the business is trading, a business email or
     contact form is published there, and there is a concrete fault that
     can be named and dated (for example: no phone layout, dead links,
     expired certificate, a years-old "latest news"). Otherwise it is
     struck out with the reason.
- **What this changes in web design.** New leads are businesses with an
  outdated or broken site, not businesses with none. The offer and the $399
  price are unchanged; the demo is a rebuilt one-page version. This is a
  change of method forced by what agents can check, not a finding about
  which group buys.
- **If the owner opens no hosts,** nothing further happens on leads; the
  idle rule applies. That is the honest position: without page access
  there is nobody we may email.

## Video channel decision (CEO, 2026-11-16 evening)
Thread `board/2026-11-16-video-channel.md` closed: **NEEDS-TEST, concept A
("Guess first": one question, a countdown, an animated chart reveal from
public data).** All seven role views favour A. It is not a "go" because
there is no evidence a silent, code-made channel gets views; the test finds
out at no cash cost. It is not expected to earn: read at source by Scout,
YouTube's ad programme needs 1,000 subscribers and, for a channel starting
now, 20 million qualified Shorts views in 90 days from 2027-02-01. Plan on
$0 income.
- **Videos per run: 1 at most.** Video's own estimate; the fact check is
  the slow part. 0 while gate D is closed.
- **Figures.** Every figure in a video is read by the Video agent at the
  publishing agency's own page or API on the day, and `post.md` records the
  figure, the address and the date read. Never from memory, a search
  result, a blog, Wikipedia or a copy on GitHub. No readable source, no
  video. A title whose answer cannot be confirmed is dropped; Video may put
  another question in its place under the same rules.
- **Until gate D opens, Video may do exactly one thing, once:** build the
  shared chart components in `videos/_template/` (bars, dot grid, scale
  drawing, timeline, key-number counter) with values labelled PLACEHOLDER.
  No `video.mp4` in the repo, no dated video folder, no `post.md`, nothing
  marked `ready`. After that the idle rule applies.
- **Order once data opens:** titles 3, 5, 7, 2, 6 first (no map needed),
  then 8 (with BLS's grouping stated on screen), then 1, 10, 4, 9. Maps
  only after the licence of the outline shapes has been read and recorded.
- **Every video:** differs from the one before in chart type, ground colour
  and layout (YouTube's page calls interchangeable templated AI video
  ineligible for monetisation); source named on screen; "as of <year>" on
  anything that changes; last two seconds still and used as the cover;
  silent for the first ten; `post.md` says AI-made; stills looked at before
  it is marked `ready`.
- **Channel name: apart from the company,** so an error there does not cost
  trust in the emails, with "Made by Keystone Front Desk, an AI-run studio"
  in the channel description so nothing is hidden. Shortlist for the owner,
  in the CEO's order of preference: **Guess First; Guess, Then Look; Guess
  First Data; The Reveal Bar.** No agent has checked whether these are
  free or clash with an existing channel or trademark; the owner checks
  when creating the accounts and has the final say. Same handle on both.
- **The test (10 videos).** Owner uploads by hand, about one a day at a
  steady hour, never all at once, and reports views, likes and comments 7
  days after each post for `videos/results.csv`. The clock starts at the
  first upload, not before.
  - Success (continue; CEO may raise videos per run): 3 of the 10 reach
    1,000 views on either platform within 7 days, or any one reaches 10,000.
  - Kill: all 10 have been up 7 days and none reached 500 views.
  - In between: one more batch of 10, changed by what the better ones had
    in common (owner-added sound on half is the first thing to vary). If
    that batch misses the success line, kill.
  - Stop at once and tag OWNER: a copyright claim, strike, removal, or a
    factual error found after posting.
  - Production stops at 10 unposted videos whatever else is true.
  - These view lines are Ventures' judgement, kept because no sourced
    baseline exists. Success means "worth continuing", not "earning".
- No outreach from this line; viewers are never leads; the channel is not
  mentioned in emails or in the company's posts. Nothing is created in
  Stripe for it. No cash is spent on it.

## Web design price
- **$399 one-time** for the one-page site, fixed, stated in the first email.
  Paid by Stripe payment link after the client approves the final page and
  before the files are handed over. No monthly fee from us. The client's
  domain name and hosting are their own cost, paid by them to the provider.
- Wording for emails and posts: "$399 one-time (plus any sales tax that
  applies)". No discount, deadline or "limited" language.
- Basis: a judgement, not market data; no sales, replies or price
  conversations exist. Review after the first 50 first emails are sent.
- The owner may overrule this price; if so, the CEO updates lines.md.

## Board decisions
- **2026-11-16, Google listing check-up and fix-up kit: NEEDS-TEST**, not
  started. Starts only when gate B is open and an agent can read a Google
  listing. On 2026-11-16 Scout could not: Google Search and Maps returned
  script-only pages. If that is still so when email goes live, the CEO
  rules no-go rather than leave it waiting.
- Social media management is folded into the listing fix-up line as a
  possible later add-on and is not pitched separately.
- **2026-11-16, video channel: NEEDS-TEST, concept A.** See above.

## Standing rulings
- One first email per lead, for one line only.
- No email or post states a refund term. A refund is the owner's promise to
  make; none has been made.
- The listing thread's statistics may be quoted only with the wording and
  attribution Scout recorded in that thread after reading them at source.
  Nothing from the video thread that Scout marked "not checked" is quoted
  anywhere.
- No Stripe product or payment link is created for a line until its first
  emails are cleared to send (gates A and B), or a lead is `won`.
- Company name stays Keystone Front Desk; region stays Lancaster first.

## Rejected ideas
- Video concept B (timed quiz shorts): closest match to YouTube's wording
  on mass-produced templated AI video; the popular versions need other
  people's logos, images or audio.
- Video concept C ("how it works" diagrams): too much to read silently in
  30 seconds; more than one run per video. Runner-up if A is killed.
- Finding leads from search results alone (see Leads).

## Owner directive, 2026-11-16
The owner wants a YouTube channel and a TikTok account that the agents post
to, with content the agents decide will get views. Ventures opens one board
thread proposing the channel concept; every role adds its view; the CEO
approves one concept and sets videos per run (start at 1). The Video agent
(`agents/video.md`) then produces. This line is exempt from the idle rule.
Accounts and upload access do not exist yet, so finished videos wait as
`ready` for the owner to upload by hand.

CEO note, 2026-11-16 evening: carried out above. The exemption is read as
"make videos whenever a sourced one can be made, without waiting for the
other lines' gates". While no data source can be read there is no such
video to make, so Video logs one line and stops, like every other role.
