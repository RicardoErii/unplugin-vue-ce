import { unVueCEVModel } from '@baiwusanyu/unvuece-v-model'
import { createUnplugin } from 'unplugin'
import type { Options } from '@baiwusanyu/unvuece-v-model/types'
const unplugin = createUnplugin<Options>(() => {
  return {
    ...unVueCEVModel(),
  }
})
export const viteVueCE = unplugin.vite
export const rollupVueCE = unplugin.rollup
export const webpackVueCE = unplugin.webpack
export const esbuildVueCE = unplugin.esbuild
