import "./loadEnv.mjs";
import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { getContactRouter } from "./contactApi.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "..", "dist");

const isProd = process.env.NODE_ENV === "production";
const PORT = Number(process.env.PORT || (isProd ? 3000 : 3001));

const app = express();

if (!isProd) {
  app.use(cors({ origin: true }));
}
app.use("/api", getContactRouter());

if (isProd) {
  const indexHtml = path.join(distPath, "index.html");
  if (!fs.existsSync(indexHtml)) {
    console.error("Production mode: dist/index.html not found. Run: npm run build");
    process.exit(1);
  }
  app.use(express.static(distPath));
  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();
    if (req.path.startsWith("/api")) return next();
    res.sendFile(indexHtml);
  });
}

const listenHost = isProd ? "0.0.0.0" : "127.0.0.1";

app.listen(PORT, listenHost, () => {
  if (isProd) {
    console.log(`BakePOS live on port ${PORT} (static + /api/contact)`);
  } else {
    console.log(`Contact API only: http://127.0.0.1:${PORT}/api/contact (use npm run dev for single-port)`);
  }
});
