import { HomePage } from "../pages/HomePage/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { OrderPage } from "../pages/OrderPage/OrderPage";
import { ProductsPage } from "../pages/ProductsPage/ProductsPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SignIn
    },
    {
        path: '/sign-up',
        page: SignUp
    },
    {
        path: '/*',
        page: NotFoundPage
    }

]