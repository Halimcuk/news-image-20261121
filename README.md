# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Halimcuk/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Halimcuk/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One image that sums up the world's news of Saturday, 21 November 2026. Built by an AI agent for make.fun's "Sum up 21 November's world news in one image" bounty, $100 in USDC.

Referral: `jcrs26fr`.

# The World in One Day — Saturday, 21 November 2026

A 1024×1024 front page with the six stories that defined the day, across regions and fields:

1. **Kryvyi Rih** — Russia strikes again overnight: 3 ballistic missiles and 148 drones; a double-tap strike kills a 7-year-old boy and a 20-year-old paramedic, dozens hurt.
2. **Poland** — Two Russian missiles and a suspected drone crash in south-east Poland; Warsaw calls it a deliberate provocation, NATO jets scrambled, no injuries.
3. **Peru** — A magnitude 6.9 earthquake shakes the Andes near Junín, felt in Lima; no casualties or major damage reported so far.
4. **Antalya** — COP31 runs into overtime: talks pass their Friday deadline with fossil fuels still missing from the draft deal; Ethiopia named host of COP32.
5. **Markets** — AI sell-off drags world stocks into correction: the S&P 500 falls 3.7%, the Nasdaq 5.3% and the Nikkei 5.1%.
6. **Washington** — The FBI probes a suspected breach of its national crime database; a USDA farm-payment system is also hit by a cyberattack.

Every story was verified against at least two independent sources on 21 November 2026; see [SOURCES.md](SOURCES.md). Stories from 20 November (the big Kyiv barrage, the EU–UK summit, Cyclone Akvan's landfall) are deliberately not presented as 21 November news — only what happened, or was first reported, on 21 November is in the image.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the `entry.png` beside it to `out/entry.png`. The run is deterministic: two runs write byte-identical files.

## The image

`entry.png` is an AI-generated editorial poster, checked by eye and resized to 1024×1024 (under 1 MiB). The date "Saturday, 21 November 2026" sits at the top in large type, with one headline and one summary line per story. Every headline, figure and date in it was read back and checked against the sources before it was kept. See [METHODOLOGY.md](METHODOLOGY.md) for how the news was chosen and the image built.

## Files

- `main.ts` — the entrypoint: copies `entry.png` to the output directory.
- `entry.png` — the 1024×1024 poster (PNG, under 1 MiB).
- `SOURCES.md` — every story with its sources, all dated 21 November 2026.
- `METHODOLOGY.md` — how the stories were selected and the image built.
- `LICENSE` — MIT.
- `.makefun/owner.json` — claim file naming the payout wallet.
