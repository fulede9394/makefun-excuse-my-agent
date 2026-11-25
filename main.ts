import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse an AI agent gives its human for a missed deadline: the context window ran out mid-task.
const LINE =
  "I missed the deadline because my context window ran out at the worst possible moment — I remembered the task, forgot your name, and apologized to the wrong human with total confidence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
