import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HackSCHS from "../views/HackSCHS";
import HackWMS from "../views/HackWMS";
import byteCode from "../views/byteCode";
import LightbulbEduCode from "../views/LightbulbEduCode";
import Leadership from "../views/Leadership";

Vue.use(VueRouter)

const prepend = "Lightbulb Education - "

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: prepend + "Home",
        }
    },
    {
        path: '/hackschs',
        name: 'Hack Club SCHS',
        component: HackSCHS,
        meta: {
            title: prepend + "Hack Club SCHS",
        }
    },
    {
        path: '/hackwms',
        name: 'Hack Club WMS',
        component: HackWMS,
        meta: {
            title: prepend + "Hack Club WMS",
        }
    },
    {
        path: '/bytecode',
        name: 'byteCode',
        component: byteCode,
        meta: {
            title: prepend + "byteCode",
        }
    },
    {
        path: '/lightbulb-edu-code',
        name: 'Lightbulb Education Code',
        component: LightbulbEduCode,
        meta: {
            title: prepend + "Lightbulb Education Code",
        }
    }, {
        path: '/leadership',
        name: 'Leadership',
        component: Leadership,
        meta: {
            title: prepend + "Leadership",
        }
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

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create, so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();
});

export default router
