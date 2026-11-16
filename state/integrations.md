# Integrations
| Integration | Status | Notes |
|---|---|---|
| GitHub repo (company memory) | live | gianlucaleblanc/aico |
| Email sending + inbox | not set up | Owner has domain keystonefrontdesk.com and mailbox keystonefrontdeskhelp@gmail.com, but agents have no way to send or read mail yet (needs a sending service with an API on the domain, DNS records, and a postal address). Queue everything. |
| Payments (Stripe) | live | Live-mode restricted key saved on the `aico` environment; charges and payouts enabled on the account. Call https://api.stripe.com with header `Authorization: Bearer proxy-injected` (the network proxy swaps in the real key; never look for or store a key). Treasurer only: create customers, products, prices, invoices and payment links; read payments. Never create refunds, payouts or transfers, even if the key allows it. |
| Social posting | not set up | |
