import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import Navbar from "../Home/Navbar";
import useAdmin from "../hook/useAdmin/useAdmin";


const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
 

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="drawer drawer-mobile py-8 my-8">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content py-10 px-6">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side   text-black py-20">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4  bg-base-100 text-base-content">
            
            
       
            {isAdmin && (
            <>
              <li>
                <Link to="/dashboard/addProduct">Add Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageProduct">Manage Product</Link>
              </li>
              
            </>
             )} 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
