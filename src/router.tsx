import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { News } from "./pages/news";
import { AddNewsAuth } from "./pages/addNewsAuth";
import { AddNews } from "./pages/addNews";
import { AllNews } from "./pages/allNews";
import { Layout } from "./components/layout";
import { Private } from "./utils/private";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/news/:id',
                element: <News />
            },
            {
                path: '/addNewsAuth',
                element: <AddNewsAuth />
            },
            {
                path: '/addNews',
                element: <Private> <AddNews /> </Private>
            },
            {
                path: '/allNews',
                element: <AllNews />
            }
        ]
    }
])

export { router }