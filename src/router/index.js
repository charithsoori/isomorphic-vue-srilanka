import VueRouter from 'vue-router';
import photoPage from '../components/PhotoPage';
import featured from '../components/Featured';
import errorPage from '../components/ErrorPage';
import home from '../components/HomePage';

const routes = [{
        path: '/photo/:photo_id',
        component: photoPage,
        props: true
    }, {
        path: '/cat/:page',
        component: featured,
        props: true
    },
    {
        path: "/home",
        component: home,
    },
    {
        path: "*",
        component: errorPage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
