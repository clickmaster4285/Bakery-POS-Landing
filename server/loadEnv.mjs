import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

/** Repo root (parent of /server). Fixes Vite dev where `cwd` may not match the project folder. */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

dotenv.config({ path: path.join(rootDir, ".env") });
dotenv.config({ path: path.join(rootDir, ".env.local") });

export { rootDir };
