// import App from "../src/App";
import Main from "../src/components/main/Main";
import Stock from "../src/components/stock/Main";
import StockQuery from "../src/components/stock/StockQuery";
import Order from "../src/components/order/Main";
import OrderMain from "../src/components/order/OrderMain";
import Router from "vue-router";


export default new Router({
    mode: "history",
    routes: [{
        path: "/",
        component: Main,
    },
    {
        path: "/main",
        component: Main
    },
    {
        path: "/stock",
        component: Stock,
        children: [
        {
            path: "/stock_query",
            component: StockQuery
        },]
    },
    {
        path: "/order",
        component: Order,
        children: [{
            path: '/order_main',
            component: OrderMain
        }]
    }]
})