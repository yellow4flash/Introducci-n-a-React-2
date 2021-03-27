import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./Users/index";
import Todos from "./Todos/index";
import MainLayout from "./Layouts/MainLayout";
export default function App() {
  return (
    <Router>
      <MainLayout>
        <Route path="/Users" render={props => <Users {...props} />} />
        <Route path="/Todos" render={props => <Todos {...props} />} />
      </MainLayout>
    </Router>
  );
}
