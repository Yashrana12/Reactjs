// import { createContext, useEffect, useState } from "react";
import { Layout } from "antd";

// import WatchData from "../../Utils/WatchData.json";

import HeaderCom from "../../UI/Components/HeaderCom/HeaderCom";
import FooterCom from "../../UI/Components/FooterCom/FooterCom";
// import CardCom from "../../UI/Components/CardCom/CardCom";
// import HomePage from "../UI/Components/HomePage";
// import ControlledCarousel from "../../UI/Components/HomePage";
// import Product from "../Product/Product";
import CrousalCom from "../../UI/Components/Crousal/CrousalCom";
import StyleCom1 from "../../UI/Components/Style1/StyleCom1";
import StyleCom2 from "../../UI/Components/Style2/StyleCom2";
import BestSellerCom from "../../UI/Components/BestSellerCom/BestSellerCom";
import DiscoverCom from "../../UI/Components/DiscoverCom/DiscoverCom";
import ModelCom from "../../UI/Components/ModelCom/ModelCom";
import GradeCom from "../../UI/Components/Grading/GradeCom";
import ControlledCarousel from "../../UI/Components/HomePage";
import { createContext } from "react";

export const SearchData = createContext();

const { Content } = Layout;

const HomeCom = () => {
  return (
    <Layout className="layout ">
      <HeaderCom />
      <Content>
        <ControlledCarousel />
        <CrousalCom />
        <StyleCom1 />
        <StyleCom2 />
        <BestSellerCom />
        <DiscoverCom />
        <ModelCom />
        <GradeCom />
      </Content>
      <FooterCom />
    </Layout>
  );
};
export default HomeCom;
