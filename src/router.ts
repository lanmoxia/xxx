import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DiaLogDemo from './components/DiaLogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import GridDemo from './components/GridDemo.vue'
import RadioDemo from './components/RadioDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc, children: [
        {path: 'button', component: ButtonDemo},
        {path: 'switch', component: SwitchDemo},
        {path: 'dialog', component: DiaLogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'grid', component: GridDemo},
        {path: 'radio', component: RadioDemo}
      ]}
  ]
})
