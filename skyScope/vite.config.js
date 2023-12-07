
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  build: { outDir:"build",manifest: true },
  base: "/",
  root: "./src",
  plugins: [reactRefresh()],
});


