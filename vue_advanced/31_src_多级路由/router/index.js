// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import AppAbout from '../pages/AppAbout'
import AppHome from '../pages/AppHome'
import AppNews from '../pages/AppNews'
import AppMessage from '../pages/AppMessage'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: AppAbout
        },
        {
            path: '/home',
            component: AppHome,
            children: [
                {
                    path: 'news',
                    component: AppNews,
                },
                {
                    path: 'message',
                    component: AppMessage,
                }
            ]
        }
    ]
})
