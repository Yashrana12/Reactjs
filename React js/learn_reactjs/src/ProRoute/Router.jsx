import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Navbar from "./Navbar";
import Auth from "./Auth";
import ProtectedRoute from "./ProtectedRoute";

export default function Router() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Auth>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={<Profile />} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Auth>
      {/* </BrowserRouter> */}
    </>
  );
}
