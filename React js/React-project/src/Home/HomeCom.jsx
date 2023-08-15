import { useEffect, useState } from "react";
import { Layout, theme } from "antd";
const { Content } = Layout;
import WatchData from "../Utils/WatchData.json";
import "../Home/Homecom.css";

import HeaderCom from "../UI/Components/HeaderCom";
import FooterCom from "../UI/Components/FooterCom";
import CardCom from "../UI/Components/CardCom";
import HomePage from "../UI/Components/HomePage";

const Homecom = () => {
  let [productData, setProductData] = useState(WatchData);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("setSearchText", searchText);
    let filterData = WatchData.filter((e) => {
      return e?.model?.toLowerCase?.()?.includes?.(searchText?.toLowerCase?.());
    });
    console.log("filterData", filterData);

    setProductData(filterData);
  }, [searchText]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log("productData", productData);
  return (
    <Layout className="layout bg-body-secondary">
      <HeaderCom setSearchText={setSearchText} />
      <HomePage />
      <Content
        className="home"
        style={{
          padding: "50px 50px",
          margin: "auto",
        }}
      >
        <div
          className=" d-flex  flex-wrap"
          style={{
            gap: "10px",
            background: colorBgContainer,
            padding: "10px",
          }}
        >
          {productData?.map?.((e) => {
            return <CardCom key={e.model} productData={e} />;
          })}
        </div>
      </Content>
      <FooterCom />
    </Layout>
  );
};
export default Homecom;
