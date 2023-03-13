import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home.js";

// single root routed App
function App() {
  return (
    <>
      <Home></Home>
      <ToastContainer />
    </>
  );
}

export default App;
