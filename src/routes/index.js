import { HomePage } from "../pages/HomePage/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { OrderPage } from "../pages/OrderPage/OrderPage";
import { ProductsPage } from "../pages/ProductsPage/ProductsPage";
<<<<<<< HEAD
import SignIn from "../pages/SignIn/SignIn";
=======
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
>>>>>>> 277369433a5632b036679256d59e0734b9298d92

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
        page: SignIn,
        isShowHeader: true
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