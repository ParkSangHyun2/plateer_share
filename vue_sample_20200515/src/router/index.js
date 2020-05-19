import VueRouter from 'vue-router';
import Vue from 'vue';
import GoodsRegistForm from '../components/GoodsRegistForm';
import MainPage from '../components/pages/MainPage';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

Vue.use(VueRouter);

const routes = [
    {path:'/main-page', component: MainPage},
    {path:'/registration', component: GoodsRegistForm},
    {path:'/sign-in', component: SignIn},
    {path:'/sign-up', component: SignUp},
];

export default new VueRouter({
    routes
});

