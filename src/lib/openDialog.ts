import Dialog from './Dialog.vue'
import {createApp, h} from 'vue';

export const openDialog = (options:any) => {
  const {title, content, okFn, cancelFn} = options
  // 防止覆盖之前的，动态创建 div
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    app.unmount()
    div.remove()
  }
  const app = createApp({
    render(){
      return h(
        Dialog,
        {
          okFn,
          cancelFn,
          visible: true,
          'onUpdate:visible': (newVisible:any) => { // 监听 visible 事件
            if(newVisible === false){
              close()
            }
          }
        },
        {title:title, content: content}
      )
    }
  })
  app.mount(div)
}
