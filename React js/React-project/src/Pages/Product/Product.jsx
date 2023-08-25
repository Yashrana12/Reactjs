import { useContext } from "react";
import HeaderCom from "../../UI/Components/HeaderCom/HeaderCom";
import FooterCom from "../../UI/Components/FooterCom/FooterCom";
import { theme } from "antd";
import CardCom from "../../UI/Components/CardCom/CardCom";
import { SearchData } from "../../App";

export default function Product() {
  let ProductData = useContext(SearchData);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <HeaderCom />

      <div
        className="site-layout-content flex flex-wrap gap-3 justify-center item-center"
        style={{
          background: colorBgContainer,
          padding: "10px",
        }}
      >
        {ProductData?.data?.map?.((e, i) => {
          return <CardCom key={i} data={e} />;
        })}
      </div>
      <FooterCom />
    </>
  );
}
