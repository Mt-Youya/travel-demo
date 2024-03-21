import { defineConfig } from "vite"
import { extname } from "path"
import Inspect from "vite-plugin-inspect"
import react from "@vitejs/plugin-react-swc"

const cssExts = [".css", ".less", ".scss", "sass", ".stylus"]

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), Inspect({ build: true, outputDir: ".vite-inspect" })],
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
    server: {
        open: true,
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
