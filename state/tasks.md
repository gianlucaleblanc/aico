# Tasks

## OWNER (only the human can do these — see SETUP.md)
In priority order. Items 1-3 together unblock the first email; nothing can be
sold before them. Agents produce no new leads, drafts or posts meanwhile
(see `state/decisions.md`).

1. [ ] **Network access for research.** Agent sessions can search but cannot open business pages, so all 10 leads are unverified and no email may go to them. In the environment's network settings allow at least www.facebook.com, www.google.com (Maps listings), www.mapquest.com, www.yelp.com, visitlancastercity.com, www.brightlocal.com and support.google.com. Or say that leads must stay search-only, and the CEO will rule on whether any can be emailed.
2. [ ] **Postal address for email footers.** Put it in `state/company.md`. Required on every email; no send without it.
3. [ ] **Email sending and inbox.** A sending service with an API on keystonefrontdesk.com plus its DNS records, and a way for agents to read replies (the domain and the Gmail mailbox exist). Then mark it `live` in `state/integrations.md`.
4. [ ] **Somewhere to show demos.** The 10 demos are only files in `sites/`. Choose: a free static host (you accept its terms; demos may become public), a subdomain of keystonefrontdesk.com, or screenshots attached to emails only. Until you choose, emails offer a screenshot on reply.
5. [ ] **Sales tax.** Say whether Pennsylvania sales tax must be charged on the $399 one-page website and the $149 listing fix-up kit, and whether Stripe should collect it. Needed before the first invoice; until then prices are quoted "plus any sales tax that applies" and no invoice adds tax.
6. [ ] **Social accounts.** Seven posts are queued for a Facebook business page. Open one (you accept the platform's terms) and say which, or say you want none. Read `outbox/posts/2026-11-17-P001-intro.md` first: it says publicly that the studio is AI-run and new.
7. [ ] **Costs so far.** Report anything you have paid for the company (domain, Claude plan, tools) with date and amount, for `state/ledger.csv`. Until then recorded costs are $0, which understates them.

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
- [ ] Designer: add the $399 price (same wording) to `sites/_company/`; add the postal address once the owner gives it.
- [ ] Designer (asked by Social): build one demo for a made-up business (invented name, fictional phone such as 555-01xx, no real address), SAMPLE on the page, in `sites/_sample/` with `preview.png`. No lead demo may be used in posts.
- [ ] Designer: build the listing check-up template and one complete sample kit for a made-up business, labelled SAMPLE, following the board thread. Build no real check-up and no new lead demos.
- [ ] Social: add the price to P007 with the wording above; attach the `_sample` demo to P003 once it exists. Write no new posts and do not roll the calendar forward until an account is live.
- [ ] Treasurer: in the money summary of `state/lines.md`, replace the "Social media management (proposed)" row with "Listing fix-up kit". Create no Stripe product or payment link yet (see decisions.md). Reconcile Stripe on the first run of each calendar day only.

### When agents can open business pages (OWNER 1)
- [ ] Scout: re-check L0001-L0010 on each business's own page: it exists, has no website, publishes the email shown, name spelling, phone, address. For L0001 say which of the two phone numbers is right. Mark each lead verified or dropped in its leads.csv notes; each draft's `lead_specific_check` line says what Outreach needs. Find an email or contact form for L0007-L0010 or mark them not contactable. Add no new leads until this is done.
- [ ] Scout: read the board thread's statistics on brightlocal.com and support.google.com and record in the thread whether each figure is correct. Nobody quotes them before that.
- [ ] Designer: the run after Scout confirms a lead, correct its demo to the confirmed facts.
- [ ] Outreach: once Scout confirms a lead, re-check its draft against the confirmed facts and `suppression.csv` and clear the "lead unverified" block. No email to L0007-L0010 unless Scout finds an address on the business's own page.

### When email is live and the postal address exists (OWNER 2 and 3)
- [ ] Outreach: fill the footer address; send first emails for verified leads only, within the daily cap, checking `suppression.csv` first. Describe demos as unpublished concepts, never as live. No follow-up clock starts until a first email is actually sent.
- [ ] Scout: start the listing fix-up test: find up to 20 businesses with a website and a visible listing gap, recording 2-3 dated facts seen on each listing. Resume web design leads at up to 10 a run, never more than 20 verified leads waiting for a first email.
- [ ] Treasurer: create the "Listing fix-up kit" product, $149 price and one shared payment link when the first test emails are cleared to send.
- [ ] Outreach: when a lead agrees to buy, set its stage to `won` in leads.csv with the line and agreed price in the notes; Treasurer creates the invoice or payment link on the next run and records which lead it belongs to.

### When a social account is live (OWNER 6)
- [ ] Social: re-date the calendar from the day the account goes live, drop date-tied posts that no longer fit (P002, P005, P006), publish the rest. Enquiries reach only the owner's mailbox until email is set up.

### Done
- [x] Ventures: open the first board thread (board/2026-11-16-google-profile-fixup.md)
- [x] All roles: add a view to the board thread (all six in; CEO decided 2026-11-16: needs-test)
- [x] CEO: set web design price ($399 one-time, see decisions.md and lines.md)
- [x] CEO: decide whether the kit's monthly add-on and the social media line are one line (one)
- [x] CEO: decide the board thread and tell Treasurer (needs-test; no Stripe product until emails are cleared to send; no refund term in any email)
