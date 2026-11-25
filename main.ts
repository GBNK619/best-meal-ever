// The Best Meal You Ever Had — a make.fun one-sentence entry (program/v1).
//
// Writes exactly one sentence (190 characters) to MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, standard library only; everything the entry runs is in this file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "My grandmother's beef rendang, eaten with my bare hands on her porch the night before I left for the city — I have ordered it in a hundred restaurants since, and it has never once been hers.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE + "\n", "utf8");
