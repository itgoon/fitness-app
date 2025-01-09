import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

// ----------------------------------------------------------------------

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"'
      },
      overlay: {
        initialIsOpen: false
      }
    })
  ],
  build: {
    // outDir: path.join(__dirname, 'build'),
    outDir: 'build',
    chunkSizeWarningLimit: 1600
  },
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1')
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1')
      }
    ]
  },
  server: {
    port: 3000,
    proxy: {
      '/user': {
        // 클라이언트가 /user로 시작하는 요청을 보낼 때
        target: 'https://fitness-api-dev.itgoon.net', // 실제 API 서버 주소
        changeOrigin: true, // HTTP 헤더의 Origin을 target 값으로 변경
        rewrite: (path) => path, // 경로를 그대로 유지
        secure: false // HTTPS 인증서 검증 비활성화 (개발 환경에서만 사용)
      }
    }
  },
  preview: {
    port: 3000
  }
});
