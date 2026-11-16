# Owner setup checklist
Agents work in dry-run (queueing everything) until these exist.

1. **GitHub** — connect GitHub in claude.ai settings, create a private repo
   (e.g. `my-company`), and tell Claude its name. This is the company's memory.
2. **Basics** — company name, the city/region to target, the name emails are
   sent from, and a postal address for the email footer (legally required for
   commercial email in the US; a PO box or virtual office address works).
3. **Domain + email** — buy a domain; create a mailbox (e.g. hello@yourdomain);
   sign up for a sending service with an API and set SPF/DKIM/DMARC. Use a
   separate domain or subdomain for outreach so your main one keeps its reputation.
4. **Payments** — a Stripe account in your name (needs your ID and bank
   account). Payouts go straight to your bank; agents only create invoices.
5. **Social** — business accounts on the platforms you want, with API access
   or a scheduling tool that has an API.
6. **Tax/legal** — income is yours and taxable; check whether you need to
   register a business where you live. Agents cannot advise on this.

API keys are added through Claude's secure credential form, never pasted into
chat or committed to the repo.
