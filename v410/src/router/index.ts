import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import p1 from '../views/p1.vue'
import P2 from '../views/p2.vue'
import P3 from '../views/p3.vue'
import Home from '../views/Home.vue'
import LeftSidebar from '../views/LeftSidebar.vue'
import RightSidebar from '../views/RightSidebar.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      components: {
        default: Home,
        LeftSidebar: LeftSidebar,
        RightSidebar: RightSidebar
      }
    },
    {
      path: '/p1',
      name: 'p1',
      components: {
        default: p1,
        LeftSidebar,
        RightSidebar
      }
    },
    {
      path: '/p2',
      name: 'p2',
      components: {
        default: P2,
        LeftSidebar,
        RightSidebar
      }
    },
    {
      path: '/p3',
      name: 'p3',
      components: {
        default: P3,
        LeftSidebar,
        RightSidebar
      }
    }
  ],
})

export default router
