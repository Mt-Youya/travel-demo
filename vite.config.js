import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": "/src",
            "@components": "/src/components",
            "@layout": "/src/layout",
            "@pages": "/src/pages",
            "@styles": "/src/styles",
            "@utils": "/src/utils",
        },
    },
})
