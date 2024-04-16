/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import defaultRoutes from './default'
import mainLayout from "@/layouts/default"


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: mainLayout,
     
    children: defaultRoutes,
    },
    
  ]
})

export default router
