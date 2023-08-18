import { useEffect, useState } from "react";
import HeaderCom from "../../UI/Components/HeaderCom";
import FooterCom from "../../UI/Components/FooterCom";
import watchData from "../../Utils/WatchData.json";
import CardCom from "../../UI/Components/CardCom";
// import propTypes from "prop-types";
import "../../Pages/Home/HomeCom.css";

export default function Exclusive() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    let filterData = watchData?.filter?.((e) => e.categories === "Exclusive");
    setData(filterData);
  }, []);
  return (
    <>
      <HeaderCom />
      <div
        className=" d-flex  flex-wrap"
        style={{
          gap: "25px",
          padding: "0px 60px",
          margin: "auto",
          borderRadius: "20px",
        }}
      >
        {Data?.map?.((e) => {
          return <CardCom key={e.img} productData={e} />;
        })}
      </div>
      <FooterCom />
    </>
  );
}
// Womans.propTypes = {
//   WatchDataData: propTypes.object,
// };
