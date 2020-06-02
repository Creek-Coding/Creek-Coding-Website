import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HackSCHS from "../views/HackSCHS";
import HackWMS from "../views/HackWMS";
import byteCode from "../views/byteCode";
import LightbulbEduCode from "../views/LightbulbEduCode";
import Leadership from "../views/Leadership";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/hackschs',
        name: 'Hack Club SCHS',
        component: HackSCHS
    },
    {
        path: '/hackwms',
        name: 'Hack Club WMS',
        component: HackWMS
    },
    {
        path: '/bytecode',
        name: 'byteCode',
        component: byteCode
    },
    {
        path: '/lightbulb-edu-code',
        name: 'Lightbulb Education Code',
        component: LightbulbEduCode
    }, {
        path: '/leadership',
        name: 'Home',
        component: Leadership
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior () {
        return null
    }
})

export default router
