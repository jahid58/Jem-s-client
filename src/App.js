import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Topbar from "./components/Home/navbar/topbar/Topbar";
import ProductOfChoice from "./components/Home/productByChoice/ProductOfChoice/ProductOfChoice";
import ManageProduct from "./components/admin/productsManagement/manageProduct/ManageProduct";

import AddProduct from "./components/admin/productsManagement/addProduct/AddProduct";
import SingleProduct from "./components/singleProduct/SingleProduct";
import LoginPage from "./pages/LoginPage";
import UpdateProduct from "./components/admin/productsManagement/updateProduct/UpdateProduct";
import AdminPage from "./pages/AdminPage";
import PrivateRoute from "./components/globalComponents/PrivateRoute";
import Checkout from "./components/checkout/Checkout";
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
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <PrivateRoute path="/admin">
            <AdminPage></AdminPage>
          </PrivateRoute>
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
