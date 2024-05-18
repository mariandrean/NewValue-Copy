import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { getAllNews } from "../services/newsServices";
import LayoutPublic from "../layout/LayoutPublic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: getAllNews
      },
      {
        path: "/login",
        element: <Login />,
      }
    ]
  }  
]);

export default router;

