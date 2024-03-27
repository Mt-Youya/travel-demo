import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"
import { extname } from "path"
import Inspect from "vite-plugin-inspect"
import react from "@vitejs/plugin-react-swc"

const cssExts = [".css", ".less", ".scss", "sass", ".stylus"]

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), Inspect()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
            "@layout": fileURLToPath(new URL("./src/layout", import.meta.url)),
            "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
            "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
            "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
        },
    },
    server: {
        port: 3030,
    },
    build: {
        outDir: "dist",
        assetsDir: "assets",
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
            output: {
                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name].[hash].js",
                compact: true,
                manualChunks: {
                    react: ["react", "react-dom", "react-router-dom"],
                    mui: ["@mui/material", "@mui/icons-material", "@mui/x-date-pickers", "@mui/styled-engine-sc", "@emotion/react", "@emotion/styled"],
                    dayjs: ["dayjs"],
                },
                assetFileNames: chunkInfo => {
                    const ext = extname(chunkInfo.name)

                    if (cssExts.includes(ext)) {
                        return `assets/css/[name].[hash].[ext]`
                    }

                    return `assets/images/[name].[hash].[ext]`
                },
            },
            minify: true,
            cssCodeSplit: true,
            assetsInlineLimit: 1024 * 5,
            emptyOutDir: true,
        },
    },
})
