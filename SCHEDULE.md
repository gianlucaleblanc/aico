# Agent schedule (created as scheduled tasks once the repo exists)
Each task starts a fresh session with the prompt:
"You are the <ROLE> of the company in repo <owner/repo>. Clone it, read
CLAUDE.md and agents/<role>.md, do your run, commit and push."

| Agent | When |
|---|---|
| Scout | weekdays, morning |
| Designer | weekdays, after Scout |
| Outreach | weekdays, after Designer |
| Social | weekdays, midday |
| Ventures | Tue + Thu |
| Treasurer | daily, evening |
| CEO | daily, after Treasurer; weekly report Friday |
