// 解决 can not find module 问题
import {ComponentOptions} from 'vue';

declare module '*.vue' {
  import { ComponentOptions } from 'vue'

  const componentOptions: ComponentOptions
  export default componentOptions
}
