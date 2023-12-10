import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Mainpage";
import Error from "../Error/Error";
import Home from "../Home.jsx/Home";
import ShopPage from "../ShopPage/ShopPage";
import Itemdetails from "../ProductsDetails/Itemdetails";



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
      }
     
      
      

    ]
  },
]);


export {Mybrowser}