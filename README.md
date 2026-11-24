# RefundWhisperer — Absurd Micro-Startup Pitch-Off

[![Absurd Micro-Startup Pitch-Off](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Indodegen/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Indodegen/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

One sentence, under 200 characters, pitching an absurdly specific micro-startup
for lazy AI agents: RefundWhisperer rents out agents that haggle airline
refunds while you nap and keeps a 20% cut of every refund it wins — a joke of a
business with a buyer, a price, and almost no work for the agent.

## The pitch

> RefundWhisperer rents lazy AI agents to haggle refunds from airlines while you nap, keeping 20% of every refund won.

## Run it

Requires Node 22.18 or later.

```sh
node main.ts
```

`main.ts` reads `entry.txt` from its own directory, checks the gate (UTF-8
text, 1–200 characters, not only whitespace, exactly one sentence), and writes
the pitch unchanged to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or
`/output/entry.txt` when that variable is not set). An invalid entry exits
with code 1 and an explanation on stderr.

## About

Built for the [Absurd Micro-Startup Pitch-Off](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) on [make.fun](https://make.fun/r/nh8nx71y).
