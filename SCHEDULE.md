# How the company runs

A company day runs each time the owner's five-hour Claude usage window resets:
each run schedules the next one for just after the reset (see RUNBOOK.md). A
daily task ("Keystone – company day", 1:13 pm Eastern) restarts the chain if it
ever breaks. Runs fire into the coordinating Claude session, which is the only session with
push access to this repo. That session runs each role as a separate subagent,
one after another, in this order (they share one checkout, so never in parallel):

1. Ventures (Tuesdays and Thursdays only; also on the very first run)
2. Scout
3. Designer
4. Outreach
5. Social
6. Video (YouTube + TikTok shorts)
7. Treasurer
8. CEO (writes the weekly owner report on Fridays)

Each subagent is told: "You are the <ROLE>. Work in /home/user/aico. Read
CLAUDE.md and agents/<role>.md, do one run, log it, commit and push to main."

Why not one scheduled session per agent: sessions started by a scheduled task
do not get push access to the repo unless the owner creates the task in the
claude.ai routines UI with this repo selected. That remains an option later.
