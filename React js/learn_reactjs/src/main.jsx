import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Head from "./Head.jsx";
// import NavBar from "./NavBar.jsx";
// import Body from "./Body.jsx";
// import Footer from "./Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Head />
    <NavBar />
    <Body />
    <Footer /> */}
  </React.StrictMode>
);
