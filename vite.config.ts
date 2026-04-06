import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import express from "express";
import dotenv from "dotenv";
import { componentTagger } from "lovable-tagger";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

/**
 * Same port as Vite: /api/* → Express (no proxy).
 * Must use a full `express()` app — a bare Router gets raw Node `res` (no `res.status`) from Connect.
 */
function contactApiSinglePortPlugin(): Plugin {
  return {
    name: "contact-api-single-port",
    apply: "serve",
    async configureServer(server) {
      dotenv.config({ path: path.join(rootDir, ".env") });
      dotenv.config({ path: path.join(rootDir, ".env.local") });

      const contactPath = path.join(rootDir, "server", "contactApi.mjs");
      const { getContactRouter } = await import(pathToFileURL(contactPath).href);
      const { default: cors } = await import("cors");

      const apiApp = express();
      apiApp.disable("x-powered-by");
      apiApp.use(cors({ origin: true }));
      apiApp.use(getContactRouter());
      server.middlewares.use("/api", apiApp);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [contactApiSinglePortPlugin(), react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
