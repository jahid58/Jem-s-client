import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ManageProduct from "./components/admin/products/manageProduct/ManageProduct";
import AddProduct from "./components/admin/products/addProduct/AddProduct";

import Dashboard from "./components/admin/adminDashboard/dashboard/Dashboard";
import LoginPage from "./pages/LoginPage";
import Topbar from "./components/navbar/topbar/Topbar";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Footer from "./components/Footer/Footer";
import ProductOfChoice from "./components/productByChoice/ProductOfChoice/ProductOfChoice";

import MegaNavbar from "./components/navbar/megaNavbar/MegaNavbar";

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
          <Route path="/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route exact path="/admin">
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
          <Route path="/">
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
