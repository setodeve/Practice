// import type { Config } from "drizzle-kit";

// export default {
//   schema: "./src/schema.ts",
//   out: "./drizzle/migrations",
//   driver: "d1",
//   dbCredentials: {
//     wranglerConfigPath: "wrangler.toml",
//     dbName: "my-database",
//   },
// } satisfies Config;
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/schema.ts",
  dialect: "sqlite",
  out: "./drizzle/migrations",
});
