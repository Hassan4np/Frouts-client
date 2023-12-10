import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Mainpage";
import Error from "../Error/Error";
import Home from "../Home.jsx/Home";
import ShopPage from "../ShopPage/ShopPage";
import Itemdetails from "../ProductsDetails/Itemdetails";
import Signin from "../Register/Signin";
import Signup from "../Register/Signup";

const Mybrowser = createBrowserRouter([
  {
    path: "/",
    element:<Mainpage></Mainpage>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/shop",
        element:<ShopPage></ShopPage>
      },
      {
        path:'itemdetails',
        element:<Itemdetails></Itemdetails>
      },
      {
        path:'login',
        element:<Signin></Signin>
      },
      {
        path:'signup',
        element:<Signup></Signup>
      },
     
      
      

    ]
  },
]);


export {Mybrowser}