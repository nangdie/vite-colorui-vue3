import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// import pxtovw from 'postcss-px-to-viewport'
import pxtovw from 'postcss-px-to-viewport-8-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  css: {
    postcss: {
      plugins: [pxtovw({
        unitToConvert: 'rpx',
        viewportWidth: 200,
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'px',
        fontViewportUnit: 'px',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: undefined,
        include: undefined,
        landscape: false
      })]
    }
  },
  resolve: {
    preserveSymlinks: true,
  },
});