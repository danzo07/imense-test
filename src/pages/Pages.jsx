import { Route, Routes } from "react-router-dom";
import React from "react";
import Training from "./Training";
import Dashboard from "./Dashboard";
import Users from "./Users";
import More from "./More";

function Pages() {
  return (
    <Routes>
      //making the training page the index
      <Route path="/" element={<Training />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/Users" element={<Users />}></Route>
      <Route path="/More" element={<More />}></Route>
    </Routes>
  );
}

export default Pages;
