import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { News } from "./pages/news";
import { AddNewsAuth } from "./pages/addNewsAuth";
import { AddNews } from "./pages/addNews";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/news',
                element: <News />
            },
            {
                path: '/addNewsAuth',
                element: <AddNewsAuth />
            },
            {
                path: '/addNews',
                element: <AddNews />
            }
        ]
    }
])

export { router }