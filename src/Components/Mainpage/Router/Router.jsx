import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Mainpage";
import Error from "../Error/Error";
import Home from "../Home.jsx/Home";



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
     
      
      

    ]
  },
]);


export {Mybrowser}