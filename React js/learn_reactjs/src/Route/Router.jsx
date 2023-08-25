import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";

export default function Router() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"about"}>about</Link>
        </li>
        <li>
          <Link to={"service"}>service</Link>
        </li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
