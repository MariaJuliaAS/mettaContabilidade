import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { News } from "./pages/news";
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
                path: '/addNews',
                element: <AddNews />
            }
        ]
    }
])

export { router }