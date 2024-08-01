import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default ({ mode }) => {
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  let proxyKey = "/api"; // + process.env.VITE_BASE_PATH + "/api";

  //TODO: removeConsole 플러그인 추가 시  Expression expected (Note that you need plugins to import files that are not JavaScript) 오류 발생
  const config = {
    base: "/", //["", process.env.VITE_BASE_PATH].join("/"),
    plugins:
      // mode !== "localhost"
      //   ? [
      //       react(),
      //       removeConsole(),
      //       tsconfigPaths(),
      //       svgr()
      //       // mode !== "localhost" && removeConsole()
      //     ]
      //   :
      [react(), tsconfigPaths(), svgr()], // removeConsole()],
    assetsInclude: ["**/*.md"],
    server: {
      port: 8888,
      proxy: {
        [proxyKey]: {
          target: "/", // [process.env.VITE_API_URL].join("/"),
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },
    build: {
      outDir: "build"
    }
  };

  return defineConfig(config);
};
