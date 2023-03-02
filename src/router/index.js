import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import NotFound from '~/pages/404.vue'
import Login from '~/pages/login.vue'

// 定义一个route数组 用于跳转菜单的数组
const routes = [{
    path:"/Login",
    component:Index
},
{
    path:"/about",
    component:About
},
{
    path:"/",
    component:Login
},
{ 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
}
]

// 定义
const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})

// 将上一步定义的router暴露出去
export default router