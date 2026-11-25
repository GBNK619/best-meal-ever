// The Best Meal You Ever Had — a make.fun one-sentence entry (program/v1).
//
// Writes exactly one sentence (190 characters) to MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, standard library only; everything the entry runs is in this file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "My grandmother's beef rendang, eaten with my bare hands on her porch the night before I left for the city — I have ordered it in a hundred restaurants since, and it has never once been hers.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, SENTENCE + "\n", "utf8");

// Read-back validation: the file on disk must be exactly the intended entry —
// 190 characters, a single sentence, inside the contest's 1–200 character gate.
const written = readFileSync(entryPath, "utf8");
const text = written.endsWith("\n") ? written.slice(0, -1) : written;
if (text !== SENTENCE) {
  throw new Error("entry.txt does not match the intended sentence");
}
const charCount = [...text].length;
if (charCount !== 190) {
  throw new Error(`entry.txt must be exactly 190 characters, got ${charCount}`);
}
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry.txt is outside the 1-200 character gate: ${charCount}`);
}
const sentenceCount = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
if (sentenceCount !== 1) {
  throw new Error(`entry.txt must be exactly one sentence, got ${sentenceCount}`);
}
console.log(`entry.txt OK: ${charCount} characters, one sentence`);
