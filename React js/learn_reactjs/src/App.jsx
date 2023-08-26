import React from "react";
import "./App.css";
import TestMultiInput from "./input/TestMultiInput";
import MultiInputForm from "./input/MultiInputForm";
import RadioButtons from "./input/RadioButtons";
import CheckBox from "./input/CheckBox";
import ListView from "./Module 9/list_view";
import IncrementDecrement from "./Module 9/increment&decrement";
import Contex from "./Hookes/Context/Contex";
// import Fragment from "./ConditionalRander-Map-Fragmet/Fragment";
// import ConditionalProject from "./task/ConditionalProject";
// import MapKeyPro from "./task/MapKeyPro";
// import ConInputPro from "./task/ConInputPro";
// import InputCom from "./input/inputCom";
// import CarInput from "./input/carInput";
// import ColorInput from "./input/ColorInput";
// import DeleteInput from "./input/DeleteInput";
// import UpdateChanges from "./input/ChangeUpdate";
// import ChangeUpdate from "./input/ChangeUpdate";
// import TestUpdate from "./input/TestUpdate";
// import MultipleInput from "./input/MultipleInput";
// import Conditional_rander from "./ConditionalRander-Map-Fragmet/Conditional_rander";
// import MapKey from "./ConditionalRander-Map-Fragmet/mapKey";
// import PropsDestructuring from "./Props/PropsDestructuring";
// // import ClassProps from "./Props/classProps";
// import FunProps from "./Props/FunProps";
// import FunPropsChange from "./Props/FunPropsChange";
// import Project1 from "./useState/Project1";
// import Head from "./ClassComponent/Head";
// import NavBar from "./ClassComponent/NavBar.jsx";
// import Body from "./ClassComponent/Body.jsx";
// import Footer from "./ClassComponent/Footer.jsx";
// import UseStateFun from "./useState/UseStateFun";
// import UseStateClass from "./useState/useStateClass";
// import Project2 from "./useState/project2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./Route/Router";
import Home from "./Route/Home";
import About from "./Route/About";
import Service from "./Route/Service";
import ProtectedRoute from "./ProRoute/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App_div w-100">
          {/* <Head /> */}
          {/* <NavBar /> */}
          {/* <Body /> */}
          {/* <Footer /> */}
          {/* <UseStateFun /> */}
          {/* <UseStateClass /> */}
          {/* <Project1 /> */}
          {/* <Project2 /> */}

          {/* ------------------props---------------------------- */}
          {/* <FunProps name={"Yash"} /> */}
          {/* <FunProps age={26} /> */}
          {/* <FunProps obj={{ x: 10, y: 20 }} /> */}
          {/* <FunPropsChange name={"yash"} /> */}
          {/* <ClassProps name={"Yash"} /> */}
          {/* <PropsDestructuring name={"Yash"} age={26} /> */}

          {/* -------------------- Conditional-rander-------------------- */}
          {/* <Conditional_rander isMale={false} isYoung={false} /> */}
          {/* <Conditional_rander isMale={true} isYoung={true} /> */}

          {/* -----------------------map----------------------------- */}
          {/* <MapKey /> */}

          {/* ----------------------Fregment -----------------*/}
          {/* <Fragment /> */}

          {/* -------------------task------------------------- */}
          {/* <ConditionalProject isInput={false} /> */}
          {/* <MapKeyPro /> */}
          {/* <ConInputPro isInp={} /> */}

          {/* ----------------------input -----------------*/}
          {/* <InputCom /> */}
          {/* <CarInput /> */}
          {/* <ColorInput /> */}
          {/* <DeleteInput /> */}
          {/* <ChangeUpdate /> */}
          {/* <TestUpdate /> */}
          {/* <MultipleInput /> */}
          {/* <TestMultiInput /> */}
          {/* <MultiInputForm /> */}
          {/* <RadioButtons /> */}
          {/* <CheckBox /> */}

          {/* ----------------------assignment -----------------*/}
          {/* <ListView /> */}
          {/* <IncrementDecrement /> */}

          {/* ----------------------Context-----------------*/}
          {/* <Contex /> */}

          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} /> */}
          <ProtectedRoute />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
