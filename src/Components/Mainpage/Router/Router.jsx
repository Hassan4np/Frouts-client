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
import Adminhome from "../Daseboard.jsx/Admin/Adminhome";
import Manageitem from "../Daseboard.jsx/Admin/manageitem";
import Update from "../Daseboard.jsx/Admin/Update";
import Catehoryitem from "../Brand/Catehoryitem";

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
        path:'/categoryshop/:id',
        element:<Catehoryitem></Catehoryitem>
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
          },
          //---Admin routers--------->
          {
            path:'adminhome',
            element:<Adminhome></Adminhome>
          },
          {
            path:'itemmange',
            element:<Manageitem></Manageitem>
          },
          {
            path:'update/:id',
            element:<Update></Update>
          }
        ]
      }




    ]
  },
]);


export { Mybrowser }