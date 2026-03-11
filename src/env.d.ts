import "../.astro/types.d.ts";
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SHIP_IT_ISLAND_SITE_URL?: string;
  readonly PUBLIC_SHIP_IT_ISLAND_SUBMIT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
