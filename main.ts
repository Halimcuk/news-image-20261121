// news-image-20261121 — Node 22, standard library only.
//
// The poster lives next to this file as entry.png: a 1024x1024 front page
// summing up the world news of Saturday, 21 November 2026 (692,302 bytes,
// inside the gate's 1024x1024 and 1 MiB limits). This program copies that
// image, byte for byte, into the grader's output directory.
// It never touches the network, and every run writes identical bytes.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
