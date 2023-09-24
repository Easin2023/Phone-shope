import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Page/Login/Login";
import Home from "../Page/Home/Home";
import Details from "../Component/Phones/PhoneDetails/Details";

const Router = createBrowserRouter([
     {
          path:'/',
          element: <Layout></Layout>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('data.json')
               },
               {
                    path:'/details/:id',
                    element:<Details></Details>,
                    loader: () => fetch('/data.json')
               },
               {
                    path: '/login',
                    element: <Login></Login>
               }
          ]
     }
])
export default Router;