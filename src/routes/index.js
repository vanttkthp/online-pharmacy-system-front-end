
import { HomePage } from "../pages/HomePage/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { OrderPage } from "../pages/OrderPage/OrderPage";
import { ProductsPage } from "../pages/ProductsPage/ProductsPage";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";

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
        path: '/signin',
        page: Signin
    },
    {
        path: '/signup',
        page: Signup
    },
    {
        path: '/*',
        page: NotFoundPage
    }

]