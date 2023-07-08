import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  routes: [
    {
      src: '/[^.]+',
      dest: '/',
      status: 200,
    },
  ],
});
