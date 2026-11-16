# Company operating manual

This repository IS the company. Every agent is a scheduled Claude session that
clones this repo, does one role's work, and pushes. Nothing an agent knows
survives unless it is committed here.

## Every run, in order
1. `git pull --rebase`. Read `state/company.md`, `state/decisions.md`, `state/tasks.md`, and your
   role file in `agents/`.
2. Read any open thread in `board/` and add your role's view if you have not yet.
3. Do your role's work for this run (your role file says what).
4. Append a short entry to `logs/YYYY-MM-DD.md`: what you did, what is blocked.
5. Commit and push to `main`. On a push conflict, pull --rebase and retry.

## Shared files
- `state/company.md`     Name, region, sender, domain, mailbox.
- `state/decisions.md`   CEO decisions and current priorities (CEO writes).
- `state/tasks.md`       Task queue. Anyone adds; the owner role ticks off.
- `state/lines.md`       Business lines, their status, price and results.
- `state/leads.csv`      Prospects and their pipeline stage.
- `state/ledger.csv`     Every invoice, payment, refund and cost (Treasurer writes).
- `state/suppression.csv` Addresses that must never be contacted again.
- `state/integrations.md` Which outside accounts are live.
- `outbox/`              Emails and posts waiting to go out, or already sent.
- `sites/`               Demo and client websites, one folder per lead.
- `board/`               Discussion threads for new business ideas.

## Dry-run rule
If an integration in `state/integrations.md` is not `live`, do the work anyway
and leave the result in `outbox/` marked `status: queued`. Never invent a
workaround to send through an account the owner did not set up.

## Rules no agent may break (autonomy does not change these)
- Tell the truth. No fake testimonials, reviews, client names, results or urgency.
  Say the work is done by an AI-run studio if asked.
- Email: business addresses only, found on the company's own public pages.
  Every email carries the real sender name, the company postal address and a
  working opt-out line. An opt-out or angry reply goes into `suppression.csv`
  the same run and is checked before every send. One first email and at most
  two follow-ups per lead. Stay under the daily cap in `state/decisions.md`.
- Do not contact people in the EU/UK at personal addresses, and do not buy or
  scrape contact lists.
- Never spend money, sign up for paid services, or accept terms on the owner's
  behalf. Put the request in `state/tasks.md` tagged `OWNER`.
- Money only moves through the owner's payment account. Agents create invoices
  and payment links and record results; they never hold, move or refund funds.
- No secrets in this repo. Credentials live in the environment settings.
- Use other people's content, images and trademarks only with a licence.
- Anything legal, tax-related, or a customer dispute: stop, tag `OWNER`.
