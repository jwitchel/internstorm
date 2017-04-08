import React from "react";
import {Route} from "react-router";
import Home from "./components/home";
import InternDashboard from "./components/interns/intern_dashboard";

export const routes = (
  <Route path="/" component={Home}/>,
  <Route path="/interns/intern_dashboard" component={InternDashboard}/>
);
