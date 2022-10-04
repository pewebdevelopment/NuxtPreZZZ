import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/0. Code For Life/07. VuePre to Nuxt/nuxtTailwindStarter00/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}