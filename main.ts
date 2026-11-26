import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "In Grumbleville, expect a high of 14 degrees and light hail of unopened letters until noon; residents should keep postboxes closed and expectations low.";

if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars; must be 1-160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
