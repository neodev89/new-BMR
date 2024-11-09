import { Home } from "./ui/components/pages/Home";
import { About } from "./ui/components/pages/About";
import { LoginPage } from "./ui/components/pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/signup',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />,
    },
]);

export const Router = () => {
    return <RouterProvider router={router} />;
};