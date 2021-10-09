import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ManageProduct from "./components/admin/manageProduct/ManageProduct";
import AddProduct from "./components/admin/addProduct/AddProduct";
import Sidebar from "./components/admin/adminSidebar/Sidebar";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Homepage></Homepage>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>
          <Route path="/admin">
            <Sidebar></Sidebar>
          </Route>
          <Route path="/">
            <Sidebar></Sidebar>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
