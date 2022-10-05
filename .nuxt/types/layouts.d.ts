import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "zen"
declare module "D:/0. Code For Life/07. VuePre to Nuxt/nuxtTailwindStarter01/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}