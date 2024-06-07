// vite-env.d.ts
declare namespace NodeJS {
    interface Global {
      __VITE__: Record<string, string | undefined>;
    }
  }
  