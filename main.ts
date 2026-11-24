import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.txt");

let raw: string;
try {
  const bytes = readFileSync(sourcePath);
  raw = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
} catch {
  fail(`entry.txt next to main.ts (${sourcePath}) is missing or not valid UTF-8`);
}

const text = raw.trim();

if (text.length === 0) {
  fail("entry is empty or only whitespace");
}
if (!/[A-Za-z]/.test(text)) {
  fail("entry must contain at least one letter");
}
if (text.length > 200) {
  fail(`entry is ${text.length} characters, over the 200-character limit`);
}
if (!/[.?!]$/.test(text)) {
  fail("entry must be a single sentence ending with terminal punctuation");
}
const body = text.slice(0, -1);
if (/[.?!]/.test(body)) {
  fail("entry must be exactly one sentence");
}
if (/\n/.test(text)) {
  fail("entry must fit on one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output/entry.txt";
const outPath = outDir.endsWith("entry.txt")
  ? outDir
  : join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, text, "utf8");
console.log(`wrote ${text.length}-character entry to ${outPath}`);
