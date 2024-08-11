import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// ant design自动按需引入相关配置
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    cors: true,
    // host: "192.168.0.105",
    host: "0.0.0.0",
    port: 5174,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
    vue()],
})
