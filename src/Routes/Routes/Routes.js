import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ReadMore from "../../Pages/ReadMore/ReadMore";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => {
                    return fetch(`http://localhost:5000/`)
                },
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`)
                },
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/news/${params.id}`)
                },
                element: <ReadMore></ReadMore>
            }
        ]
    },
])