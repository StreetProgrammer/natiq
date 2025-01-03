import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Natiq from "./pages/Natiq";
import App from "./App";

export const router =  createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "",
                Component: Home
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "natiq",
                Component: Natiq
            },
        ]

    }
])