import Vue from "vue";
import Router from "vue-router";

const DefaultContainer = () => import("../components/DefaultContainer");
const Page404 = () => import("../components/DefaultContainer");
const Visualizer = () => import("../components/GraphVisualizer");

Vue.use(Router);

export default new Router({
    mode: "hash",
    linkActiveClass: "open active",
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: "*",
            component: Page404
        },
        {
            path: "/home",
            redirect: "/",
            name: "home",
            component: DefaultContainer
        },
        {
            path: "/visualizer/:nodeID",
            name: "visualizer",
            component: Visualizer
        }
    ]
});

