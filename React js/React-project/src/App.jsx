// import MultiInputForm from "./MultiInputForm";
import { createContext, useState } from "react";
import "./App.css";
import Homecom from "./Pages/Home/HomeCom";
import Womans from "./Pages/Woman/Womans";
import Man from "./Pages/Man/Mans";
import Exclusive from "./Pages/Exclusive/Exclusive";
import WatchData from "./Utils/WatchData.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product/Product";
import RegisterPage from "./Pages/RegistrationPage/RegisterPage";
import Contact from "./Pages/Contact/Contact";
import Error404 from "./Pages/404/Error404";

export const SearchData = createContext();

function App() {
  let [data, setData] = useState(WatchData);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <BrowserRouter>
        <SearchData.Provider
          value={{ data, searchText, setSearchText, setData }}
        >
          <Routes>
            <Route path="/" element={<Homecom />} />
            <Route path="/Product" element={<Product />} />
            <Route
              path="/Womans"
              element={<Womans searchText={searchText} />}
            />
            <Route path="/Man" element={<Man searchText={searchText} />} />
            <Route
              path="/Exclusive"
              element={<Exclusive searchText={searchText} />}
            />
            <Route path="/SignUp" element={<RegisterPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/404" element={<Error404 />} />
          </Routes>
        </SearchData.Provider>
      </BrowserRouter>
      {/* <MultiInputForm /> */}
    </>
  );
}

export default App;
