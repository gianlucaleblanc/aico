# Company-day runbook (for the coordinating session)

The owner wants a company day to run each time the Claude five-hour usage
window resets. Run unattended; do not ask questions.

## 0. Guard against double runs
Read `logs/last_run.txt` (a UTC timestamp). If a company day finished less
than 3 hours ago, skip to step 4 without running any agents.

## 1. Prepare
Make sure /home/user/aico is a working clone (re-clone from
https://github.com/gianlucaleblanc/aico if the container was replaced), then
`git pull --rebase origin main`.

## 2. Run the agents
Run each role as its own subagent with the Agent tool, strictly one after
another (they share one checkout), waiting for each to finish:

Ventures (only if board/ has no threads yet, or it is Tuesday or Thursday in
America/New_York and Ventures has not already run today), Scout, Designer,
Outreach, Social, Video, Treasurer, CEO.

Instruction for each: "You are the <ROLE> agent of Keystone Front Desk. Work
in /home/user/aico. Read CLAUDE.md and agents/<role>.md and follow them
exactly: do one run of your role, append to today's log in logs/, commit, and
push to main. Work unattended; anything needing the human owner goes in
state/tasks.md under OWNER."

Skip idle roles: before spawning a role, the coordinator checks the gates in
`state/decisions.md` and that role's open items in `state/tasks.md`. If the
role has no task whose gate is open, do not spawn it; write one line for it
in today's log ("<Role>: idle, nothing unblocked") instead. The Treasurer
runs at most once per New York calendar day; the CEO runs only if another
role did real work this run or the owner changed something. This saves the
owner's usage; an idle subagent costs about as much as a working one.

If a role fails, note it and carry on with the next.

## 3. Close out
Write the current UTC time to `logs/last_run.txt`, commit, push, and confirm
origin/main has the commits.

## 4. Schedule the next run at the usage reset
- Call get_session with no session_id and read
  `external_metadata.rate_limit_info.resetsAt` (Unix seconds).
- Call list_triggers. If an enabled, not-yet-fired one-shot named
  "Keystone – next run" already exists, do not create another.
- Otherwise call send_later (name "Keystone – next run", initiation
  human_schedule) for 3 minutes after resetsAt, with the message:
  "Run the Keystone company day: follow /home/user/aico/RUNBOOK.md exactly."
  If resetsAt is missing or already past, use 5 hours from now.

## 5. Report
End with a short summary for the owner: what each agent did, totals so far
(leads, demos, queued or sent emails and posts, revenue from the ledger),
usage consumed by this run if visible, when the next run is scheduled, and
open OWNER tasks.
