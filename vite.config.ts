import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      rules: [
        ['flex-1', { flex: 1 }],
        ['word-break-all', { 'word-break': 'keep-all' }],
        ['caret-color', { color: '#3B82F6' }]
      ]
    }),
    DefineOptions(),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router'],
      dts: 'src/auto-import.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
