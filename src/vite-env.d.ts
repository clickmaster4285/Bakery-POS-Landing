/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Only if the API is on another origin (optional). Leave unset for single-domain deploy. */
  readonly VITE_CONTACT_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
