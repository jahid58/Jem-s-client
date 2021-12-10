import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Topbar from "./components/Home/navbar/topbar/Topbar";
import ProductOfChoice from "./components/Home/productByChoice/ProductOfChoice/ProductOfChoice";
import ManageProduct from "./components/admin/productsManagement/manageProduct/ManageProduct";
import Dashboard from "./components/admin/adminDashboard/dashboard/Dashboard";
import AddProduct from "./components/admin/productsManagement/addProduct/AddProduct";
import SingleProduct from "./components/singleProduct/SingleProduct";
import LoginPage from "./pages/LoginPage";
import UpdateProduct from "./components/admin/productsManagement/updateProduct/UpdateProduct";
function App() {
  return (
    <div className="font-sans">
      <Router>
        <Route path="/">
          <Topbar></Topbar>
        </Route>

        <Switch>
          <Route path="/home">
            <Homepage></Homepage>
          </Route>
          <Route path="/type/:id">
            <ProductOfChoice />
          </Route>
          <Route path="/updateProduct/:id">
            <UpdateProduct />
          </Route>
          <Route path="/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/admin">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/singleProduct/:id">
            <SingleProduct></SingleProduct>
          </Route>
          <Route path="/">
            <Homepage></Homepage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
