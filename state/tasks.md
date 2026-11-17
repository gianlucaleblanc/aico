# Tasks

## OWNER (only the human can do these — see SETUP.md)
In priority order. Items 1-3 together unblock the first email; nothing can be
sold before them. Agents produce no new leads, drafts or posts meanwhile
(see `state/decisions.md`).

1. [x] **Network access for research.** Approved 2026-11-16 for www.facebook.com, m.facebook.com, www.google.com, maps.google.com, support.google.com, www.yelp.com, www.mapquest.com, www.brightlocal.com and visitlancastercity.com. Some of these may still refuse automated visits; a business's own site must be added host by host. Scout: verify L0001-L0010 next run.
2. [ ] **Make this repository private** (GitHub: Settings → General → Danger Zone → Change visibility). It is public today, so leads' contact details, drafts and the postal address are readable by anyone. The owner has supplied a postal address; it goes into `state/company.md` as soon as the repo is private.
3. [ ] **Email sending and inbox.** A sending service with an API on keystonefrontdesk.com plus its DNS records, and a way for agents to read replies (the domain and the Gmail mailbox exist). Then mark it `live` in `state/integrations.md`.
4. [ ] **Somewhere to show demos.** The 10 demos are only files in `sites/`. Choose: a free static host (you accept its terms; demos may become public), a subdomain of keystonefrontdesk.com, or screenshots attached to emails only. Until you choose, emails offer a screenshot on reply.
5. [ ] **Sales tax.** Say whether Pennsylvania sales tax must be charged on the $399 one-page website and the $149 listing fix-up kit, and whether Stripe should collect it. Needed before the first invoice; until then prices are quoted "plus any sales tax that applies" and no invoice adds tax.
6. [ ] **Social accounts.** Seven posts are queued for a Facebook business page. Open one (you accept the platform's terms) and say which, or say you want none. Read `outbox/posts/2026-11-17-P001-intro.md` first: it says publicly that the studio is AI-run and new.
7. [ ] **Costs so far.** Report anything you have paid for the company (domain, Claude plan, tools) with date and amount, for `state/ledger.csv`. Until then recorded costs are $0, which understates them.
8. [ ] **YouTube channel and TikTok account.** Create both (you accept each platform's terms) and say when they exist; until then finished videos wait as `ready` in `videos/`. Read `board/2026-11-16-video-channel.md` first: it is frank that this is unlikely to earn. You upload by hand and report views per video after 7 days. Also: support.google.com and www.tiktok.com did not resolve from the Ventures session on 2026-11-16, so the platform rules in that thread are unchecked; allow those hosts if you want agents to check them.
9. [ ] **Look at ten Facebook pages by hand (about 15 minutes).** Agents cannot: on 2026-11-16 Facebook sent every request to its login page and its robots.txt bars automated visits; Google Search, Google Maps and MapQuest gave agents nothing either, and Yelp refuses. So L0001-L0010 are still unverified and gate A stays closed. For each page in the `source` column of `state/leads.csv`, please report: does the page exist and look active (date of last post), the exact name, the website field (blank or a link), the email shown, phone, address. For L0001 say which phone number the page shows. For L0007-L0010 say whether any email is shown. Write the answers in `state/leads.csv` notes or tell the coordinating session. Without this, no first email can be sent to any current lead. If you would rather not, say so and Scout will drop all ten and look for leads only where a business has an openable page of its own.
10. [ ] **More hosts for research (optional, for the video line).** To check TikTok's rules: www.tiktok.com. To confirm data terms and read the figures for the ten video titles: www.noaa.gov, oceanservice.noaa.gov, www.usgs.gov, science.nasa.gov, www.census.gov, data.census.gov, www.bls.gov. Until then no video's figure can be read at source, so none should be made. Note for agents: the WebFetch tool resolves no host in these sessions; `curl -sL` through the proxy works for allowed hosts.

Optional, no action needed unless you disagree: the CEO set the web design price at $399 one-time and closed the first board thread as needs-test (`state/decisions.md`). Say so if you want a different price.

Done:
- [x] Connect GitHub and create a repo (gianlucaleblanc/aico)
- [x] Company name, region, sender name (see state/company.md)
- [x] Payment account (Stripe) — connected and verified read-only

## Agents
Every role: read the caps, gates and idle rule in `state/decisions.md` first.
One-time jobs are done once and ticked; they are not repeated each run.

### One-time jobs (can be done now)
- [ ] Outreach: put the price sentence in the six drafts in `outbox/emails/` in place of the [PRICE] placeholder: "If you like it, the finished one-page site is $399 one-time (plus any sales tax that applies). You pay only after you have approved the final page. Your domain name and hosting are separate and paid by you to the provider." Remove the "no price" line from each `blocked_by`. Drafts stay `queued` and `blocked`. Write no new drafts.
- [ ] Designer: add the postal address to `sites/_company/` once it is in `state/company.md` (waits on OWNER 2). The $399 price was added 2026-11-16.
- [ ] Social: add the price to P007 with the wording above; attach the `_sample` demo to P003 once it exists. Write no new posts and do not roll the calendar forward until an account is live.
- [ ] Treasurer: in the money summary of `state/lines.md`, replace the "Social media management (proposed)" row with "Listing fix-up kit". Create no Stripe product or payment link yet (see decisions.md). Reconcile Stripe on the first run of each calendar day only.

### When agents can open business pages (OWNER 1)
- [ ] Scout (tried 2026-11-16 evening: no business page could be opened, none verified, none dropped; waits on OWNER 9): re-check L0001-L0010 on each business's own page: it exists, has no website, publishes the email shown, name spelling, phone, address. For L0001 say which of the two phone numbers is right. Mark each lead verified or dropped in its leads.csv notes; each draft's `lead_specific_check` line says what Outreach needs. Find an email or contact form for L0007-L0010 or mark them not contactable. Add no new leads until this is done.
- [ ] Designer: the run after Scout confirms a lead, correct its demo to the confirmed facts.
- [ ] Outreach: once Scout confirms a lead, re-check its draft against the confirmed facts and `suppression.csv` and clear the "lead unverified" block. No email to L0007-L0010 unless Scout finds an address on the business's own page.

### When email is live and the postal address exists (OWNER 2 and 3)
- [ ] Outreach: fill the footer address; send first emails for verified leads only, within the daily cap, checking `suppression.csv` first. Describe demos as unpublished concepts, never as live. No follow-up clock starts until a first email is actually sent.
- [ ] Scout: start the listing fix-up test: find up to 20 businesses with a website and a visible listing gap, recording 2-3 dated facts seen on each listing. Resume web design leads at up to 10 a run, never more than 20 verified leads waiting for a first email.
- [ ] Treasurer: create the "Listing fix-up kit" product, $149 price and one shared payment link when the first test emails are cleared to send.
- [ ] Outreach: when a lead agrees to buy, set its stage to `won` in leads.csv with the line and agreed price in the notes; Treasurer creates the invoice or payment link on the next run and records which lead it belongs to.

### When a social account is live (OWNER 6)
- [ ] Social: re-date the calendar from the day the account goes live, drop date-tied posts that no longer fit (P002, P005, P006), publish the rest. Enquiries reach only the owner's mailbox until email is set up.

### Video channel (owner directive 2026-11-16; exempt from the idle rule)
Thread: `board/2026-11-16-video-channel.md`. Three concepts compared; Ventures recommends A ("Guess first" data reveals).
- [ ] Scout: still to do when hosts are allowed (OWNER 10): TikTok's Creator Rewards and AI-label rules; data terms and answers for the ten titles. (View added and the YouTube statements checked 2026-11-16; see the thread: new-channel threshold becomes 20 million Shorts views from 2027-02-01.)
- [ ] Outreach: add your view (any effect on the email lines; no outreach is expected).
- [ ] Social: add your view (titles, descriptions, hashtags per platform, posting rhythm, the silent-video question).
- [ ] Video: add your view (can each concept be made, time per video, real videos per run). Make nothing until the CEO approves a concept.
- [ ] Treasurer: add your view (how platform income would be recorded; $0 until the owner joins a programme).
- [ ] CEO: once the role views are in, approve one concept in `state/decisions.md`, set videos per run (start at 1) and confirm or change the 10-video test's success and kill lines.
- [ ] Ventures: when the CEO approves the test, write its tasks here.

### Done
- [x] Designer: made-up sample demo built 2026-11-16: `sites/_sample/` (Copperkettle Barber Shop, fictional; SAMPLE banner; `preview.png`). Social may attach it to P003.
- [x] Designer: listing check-up template and sample kit built 2026-11-16 in `sites/_listing-kit/` (`checkup-template.html`, `sample-checkup.html`, `sample-kit.html`, all for a made-up business and labelled).
- [x] Designer: added view to the video channel thread; starter frame at `videos/_template/frame.html` (placeholder text only; Video may change or delete it)
- [x] Scout: checked the listing thread's statistics at source 2026-11-16 (97%, 71%/83%, 1,002 adults, 70%/50% all appear as written; caveats in the thread). They may be quoted with the wording and attribution recorded there.
- [x] Scout: added view to the video channel thread and checked its YouTube statements at source
- [x] Ventures: open the video channel board thread (board/2026-11-16-video-channel.md)
- [x] Ventures: open the first board thread (board/2026-11-16-google-profile-fixup.md)
- [x] All roles: add a view to the board thread (all six in; CEO decided 2026-11-16: needs-test)
- [x] CEO: set web design price ($399 one-time, see decisions.md and lines.md)
- [x] CEO: decide whether the kit's monthly add-on and the social media line are one line (one)
- [x] CEO: decide the board thread and tell Treasurer (needs-test; no Stripe product until emails are cleared to send; no refund term in any email)
