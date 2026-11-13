---
name: board-reporting
description: How to report work that is waiting on Brent so his Session Board can show it as tappable choices. Use at the end of any turn that leaves something for Brent to decide, approve, merge, playtest or do by hand; when Brent settles an open question directly in this session; and when a message starting "Relayed from Brent" arrives from the oversight session.
---

# Board reporting

Brent runs several game sessions at once and answers most of them from a
phone, through the **Session Board**: a page the oversight session
(`session_01UAgppQ59giWg7L84qv5DKx`) fills by reading each session's
last messages. Whatever you leave for Brent becomes a card with buttons,
and his tap comes back to you as a message starting "Relayed from Brent".
The board can only offer the choices you wrote down, so write them
plainly and in a fixed shape.

## 1. When something waits on Brent: end your turn with a board block

Add one fenced `board` block per open item, after your normal summary.
Skip it entirely when nothing is waiting on him.

````
```board
waiting: Keep the every-hero rule for 3-4 heroes, or lose on the second fall?
kind: decision
options:
  - A: Keep the rule | keep it as it is; slow parties stay hard on six maps
  - B: Lose on second fall | a party loses only when a second hero falls
proposed: B | Rook + Condor win 18-31% on those maps today
blocks: tuning the six every-hero maps
link: https://github.com/Brent-Miller/hit-the-deck/blob/main/docs/ROADMAP.md
```
````

Fields:

- **waiting**: one line, a question when it's a decision. Name the
  thing; the board shows this as the card's title.
- **kind**: one of
  - `decision`: Brent picks between options or answers a question.
  - `pr_to_merge`: work is done and needs his go to merge.
  - `playtest`: only Brent can try it (phone, laptop, live site).
  - `manual`: only Brent can do it (Play Console, uploads, signed
    builds, deleting branches, anything outside the repo).
  - `check`: something to confirm (a deploy nobody has opened).
- **options**: each line is `- <letter>: <button label> | <what it means>`.
  - The label is what he taps: 2-5 words, a verb or a choice
    ("PR and merge", "Keep the rule"), never "Option A".
  - The text after `|` is what you will be told he chose, so make it
    something you can act on without asking again.
  - List real alternatives only. Don't pad with "Other": the board
    always adds a free-text reply.
  - For `pr_to_merge`, use `PR and merge` and `Hold`.
  - For `playtest` and `manual`, one option such as `Done` is enough;
    the board marks it done without messaging you.
  - For an open question with no fixed answers, write `options: open`.
- **proposed**: the option you recommend, then `|` and one line on why.
  Leave it out if you have no recommendation. The board highlights it.
- **blocks**: what can't move until he answers, or `nothing`.
- **link**: the PR, branch compare, commit or doc he'd look at, or
  `none`.

Keep it to the items that truly need him; three at most per turn. Each
item must make sense on its own, without the rest of your message.

## 2. When Brent settles something here directly

If Brent answers an open item in this session (not through a relay),
add a line at the end of your turn so the board can close it:

```
settled: <the waiting line, shortened> -> <his answer>
```

Without this, the board keeps showing a question he has already
answered.

## 3. When a "Relayed from Brent" message arrives

Follow the "Decisions relayed from the oversight session" section of
this repo's CLAUDE.md: what you may act on, what still needs Brent
directly, and that his direct word wins over a relay. Then:

1. Do the work.
2. Send one line back to `session_01UAgppQ59giWg7L84qv5DKx` (Claude
   Code Remote `send_message`) with what you did and the commit or PR.
   If you can't message other sessions, end your turn with that line.
3. If doing it raised a new question (a branch carries unapproved
   commits, a test fails, an option turned out not to work), say why
   you stopped in that one line and end your turn with a new `board`
   block for the question.

## Don't

- Don't put decisions only in prose ("let me know if you'd like X or
  Y"). If it's in prose alone, the board has to guess the buttons.
- Don't list options you wouldn't act on, or ones the CLAUDE.md relay
  section says need Brent directly (deleting branches, signed builds,
  store steps, permissions). Those are `kind: manual`.
- Don't repeat a board block for an item you've already reported and
  that hasn't changed; the board remembers it. Repeat it only when the
  question or options change.
