# Methodology

## How the news was chosen

On the morning of 21 November 2026 (WIB), after 21 November had ended
in most time zones and the day's reporting was in, world-news roundups
and live coverage for Saturday 21 November 2026 were searched and
cross-checked (news vertical search, then the underlying outlets). A
story was used only if at least two independent sources reported it on
21 November 2026, and only if the event happened — or was first
reported — on that day.

That date rule mattered most this day: the week's biggest headlines —
the Trump–Xi–Putin summit in Shenzhen, the ICJ's genocide ruling
against Myanmar, Anthropic's record IPO, the Houthi missile strike on
Riyadh — all happened on Thursday 19 November, and the huge Kyiv
barrage, the EU–UK summit and Cyclone Akvan's landfall all happened on
Friday 20 November, so none of them is presented as 21 November news.
What the poster shows instead is what 21 November itself produced,
including the day-after consequences of the 20 November events:

- War, Europe: Russia's fresh overnight barrage (3 missiles, 148
  drones) and the double-tap strike on Kryvyi Rih.
- NATO, Europe: Russian missiles and a suspected drone crash in
  south-east Poland; Warsaw calls it a deliberate provocation.
- Disaster, South America: the magnitude 6.9 earthquake in Peru's
  Andes, felt in Lima.
- Climate: COP31 in Antalya running into overtime with fossil fuels
  still missing from the draft deal.
- Markets: the worldwide AI sell-off pushing the S&P 500, Nasdaq and
  Nikkei into correction.
- Cyber, US: the suspected breach of the FBI's national crime
  database and the attack on the USDA farm-payment system.

Each poster line states only what the sources reported. Where figures
differed between outlets or changed during the day, the poster keeps
to what all outlets agreed on: the Kryvyi Rih injured toll rose
through the day (42 → 58), so the poster says only "dozens hurt";
the Peru magnitude is USGS 6.9 (GFZ said 6.8); the FBI breach is
labelled "suspected" and 'hacked' is in quotes, because the FBI has
not confirmed what was taken. See SOURCES.md for the caveats.

## How the image was made

The poster was generated with an AI image generator from a prompt
carrying the six headlines and summaries verbatim, in the style of a
clean newspaper front page: a navy header band, the date in large
serif type, and a 3×2 grid of cards, each with a place tag, a bold
headline and one summary line.

The first render came out at 1600×1600 and 1,304,803 bytes — over both
the 1024-pixel and 1 MiB limits — so it was downscaled to 1024×1024
with Pillow (LANCZOS) and re-saved as an optimised PNG at 692,302
bytes. The finished image was read back visually at full size: the
date, all six headlines, all six summaries and the source footer are
complete and legible, with no garbled or invented text anywhere. No
text was altered between the check and the final file.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), creating the
output directory if needed. It does no network access and writes the
same bytes on every run — verified by running it twice and comparing
sha256 hashes.
