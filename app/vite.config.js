import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          msal: ["@azure/msal-browser", "@azure/msal-react"],
          fluent: [
            "@fluentui/react-components",
            "@fluentui/react-icons",
          ],
          graph: ["@microsoft/microsoft-graph-client"],
        },
      },
    },
  },
});
