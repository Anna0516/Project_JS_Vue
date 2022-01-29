import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'

import HomeView from './views/HomeView.vue'

import OtherView from './views/OtherView.vue'
import PinkView from './views/PinkView.vue'
import PinkDetails from './components/Pinkdetails.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: HomeView,
      path: '/'
    },
    {
      component: OtherView,
      path: '/other/:otherText'
    },
    {
      component: PinkView,
      path: '/pink',
      name: 'PinkView'
    },
    {
      component: PinkDetails,
      path: '/PinkDetails/:productId',
      name: 'PinkDetails'
    }
  ]
})
