import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://estate-app-backend-ulyr.onrender.com",
        secure: false,
      },
    },
  },

  plugins: [react()],
});
