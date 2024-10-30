/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly PUBLIC_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
