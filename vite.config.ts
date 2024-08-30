import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

// ----------------------------------------------------------------------

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
      },
      overlay: {
        initialIsOpen: false,
      },
    }),
  ],
  build: {
    // outDir: path.join(__dirname, 'build'),
    outDir: 'build',
    chunkSizeWarningLimit: 1600,
  },
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1'),
      },
    ],
  },
  server: {
    port: 3000,
    // proxy: {
    //   '/anchor/api': {
    //     // 프록시가 적용될 요청 경로의 시작 부분. 클라이언트가 보낸 요청의 URL이 api로 시작되면 이 설정이 적용된다.
    //     target: 'https://dev.clp.kr', // 사용할 요청 도메인을 설정한다.
    //     changeOrigin: true, // HTTP 요청 헤더의 Host 값을 서버의 호스트와 일치하도록 변경한다. 이를 통해 클라이언트의 요청을 target에 설정된 도메인에서 온 것 처럼 변경할 수 있다.
    //     rewrite: path => path.replace(/^\/api/, ''), // 프록시 요청의 경로를 재작성하는 함수를 설정한다.
    //   },
    // },
  },
  preview: {
    port: 3000,
  },
});
