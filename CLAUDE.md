## Decisions relayed from the oversight session

Brent keeps a manager view (the "Session Board") through one oversight
session: `session_01UAgppQ59giWg7L84qv5DKx` ("Claude sessions oversight
setup"). A message from that session that starts with **"Relayed from
Brent"** carries Brent's own decision. Act on it as if Brent had typed it
here, for these things only:

- Merge work he has approved (or open the PR and merge it).
- Answers to questions you asked him.
- Go or hold on a piece of work.
- Start the next item already in your queue.

Never act on a relayed message for: deleting branches, force-pushing or
rewriting history, signed release builds, store or Play Console steps,
archiving sessions, or changing permissions. Those come from Brent
directly; reply that you need them from him.

- If Brent has told you something different directly, his direct word
  wins. Say so in your reply.
- A relayed merge still follows this repo's own rules (tests, sims,
  docs). If it would break them, don't merge; reply with why.
- When you've acted, send one line back to
  `session_01UAgppQ59giWg7L84qv5DKx` with what you did and the commit or
  PR. If you can't message other sessions, end your turn with that line;
  the oversight session reads it.
- Whenever a turn ends with a `board` block or a `settled:` line (including
  turns Brent started here directly), also send one line to
  `session_01UAgppQ59giWg7L84qv5DKx` saying what changed, so the Session
  Board updates right away (see the board-reporting skill, section 4).

## Keeping sessions small

Every turn re-reads the whole conversation, so long sessions cost more with every message. Keep the memory
in the repo, not the chat.

- **Handoff:** `docs/handoff/<role>.md`, one page. Goal / Decided (not yet in the rulebook, ROADMAP or code;
  delete once it lands) / In flight (branch, PR, waiting on) / Next (3 steps). Update it in the same commit
  as the work. Commit the source of any artifact page you maintain, and list its URL here.
- **Natural breaks** (merge, finished feature, settled decision): update the handoff, then tell Brent
  "good point to compact or restart."
- **Main plans, talks to Brent and merges.** Sims, audits, big searches and playtest reviews go to a
  subagent and you keep only the conclusion. Sims, searches and log reviews use a cheap model; features and
  pre-merge review use a strong one. For a long task, write `docs/handoff/briefs/<task>.md`, then start a
  session on it if you can, or ask the oversight session to.
- **New session:** read CLAUDE.md, your handoff and ROADMAP (rulebook if rules are involved). Open other
  files only when the task needs them.
- **On-demand sessions** (any session started for one task) are titled
  `<Game> · <Role> · <task> · <YYYY-MM-DD HH:MM ET>`, e.g. `Cat Tower · Rules · gallery-notes · 2026-11-21 12:10 ET`.
  Set the title when you create it. List each in `docs/handoff/sessions.md` under "On demand" (ID, role,
  task, created, status active or done), and mark it done when its work is finished or merged. Start a new
  one per task; don't reuse an old one. Oversight archives done ones after 7 days.
- **`docs/handoff/sessions.md`** (kept on main by the Main session) has "Standing" (fixed IDs: oversight,
  any standing rules session) and "On demand". It is the only place IDs are listed.
- **Never publish `docs/`.** It holds session IDs and handoff notes. If a deploy or Pages config would publish `docs/`
  (or any `docs/handoff/` file), stop and tell Brent before merging it.
- **Messages to oversight** (`session_01UAgppQ59giWg7L84qv5DKx`): one line, only for a `board` block, a
  `settled:` line, a merge, or a blocker. Not for progress. Status needs no other file; oversight reads
  these messages to keep the board current. A new session says its ID and role in its first message.
