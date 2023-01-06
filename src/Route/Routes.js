import { createBrowserRouter } from "react-router-dom";

import EditDetails from "../Dashboard/EditDetails/EditDetails";

import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Register/Login";
import SignUp from "../Register/SignUp";

import PrivateRoute from "./PrivateRoute";
import ProductsAllLoader from "./../Page/ProductsAllLoader";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import ManageProduct from "../Dashboard/ManageProduct/ManageProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
      {
        path: "/products/:id",
        loader: ({ params }) =>
          fetch(`https://task-4-server-nine.vercel.app/products/${params.id}`),
        element: <EditDetails></EditDetails>,
      },
      {
        path: "/products",
        loader: () =>
          fetch("https://task-4-server-nine.vercel.app/productsAll"),
        element: <ProductsAllLoader></ProductsAllLoader>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
        {/* <Dashboard2></Dashboard2> */}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },

      {
        path: "/dashboard/manageProduct",
        element: <ManageProduct></ManageProduct>,
      },
    ],
  },
]);
export default router;
