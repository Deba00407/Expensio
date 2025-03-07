import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import tailwindcssMotion from "tailwindcss-motion";

export default defineConfig({
  plugins: [react(), tailwindcss(), tailwindcssMotion],
})
