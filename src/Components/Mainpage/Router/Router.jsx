import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Mainpage";
import Error from "../Error/Error";
import Home from "../Home.jsx/Home";
import ShopPage from "../ShopPage/ShopPage";
import Itemdetails from "../ProductsDetails/Itemdetails";
import Signin from "../Register/Signin";
import Signup from "../Register/Signup";
import Cart from "../ShopPage/Cart";
import Checkout from "../ShopPage/Checkout";
import PrivateRepo from "../PrivateRepo/PrivateRepo";
import Daseboard from "../Daseboard.jsx/Daseboard";
import Userhome from "../Daseboard.jsx/User/Userhome";
import Mycard from "../Daseboard.jsx/User/Mycard";
import Ordersitem from "../Daseboard.jsx/User/Ordersitem";

const Mybrowser = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/shop",
        element: <ShopPage></ShopPage>
      },
      {
        path: '/itemdetails/:id',
        element: <PrivateRepo><Itemdetails></Itemdetails></PrivateRepo>
      },
      {
        path: '/login',
        element: <Signin></Signin>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/cart',
        element: <PrivateRepo><Cart></Cart></PrivateRepo>
      },
      {
        path: '/checkout',
        element: <PrivateRepo><Checkout></Checkout></PrivateRepo>
      },
      {
        path: '/daseboard',
        element: <PrivateRepo><Daseboard></Daseboard></PrivateRepo>,
        children: [
          {
            path: 'userhome',
            element:<Userhome></Userhome>
          },
          {
            path:'carts',
            element:<Mycard></Mycard>
          },
          {
            path:'orders',
            element:<Ordersitem></Ordersitem>
          }
        ]
      }




    ]
  },
]);


export { Mybrowser }