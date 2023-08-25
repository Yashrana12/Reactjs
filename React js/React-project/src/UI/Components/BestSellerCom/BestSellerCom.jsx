import { useEffect, useState } from "react";
import { useContext } from "react";
import { SearchData } from "../../../App";
import WatchData from "../../../Utils/WatchData.json";
import "../BestSellerCom/BestSellerCom.css";
import CardCom from "../CardCom/CardCom";

// export default function BestSellerCom() {
//   const [bestSellerData, setBestSellerData] = useState([]);
//   let { searchText } = useContext(SearchData);
//   useEffect(() => {
//     let filterdata = WatchData.sort((a, b) => {
//       return b.bestSeller - a.bestSeller;
//     });
//     setBestSellerData(filterdata.slice(0, 5));
//   }, [searchText]);
//   return (
//     <>
//       <div className="bs text-center">
//         <h6 className="text-xl font-bold drop-shadow-sm">Check out our</h6>
//         <h1 className="text-6xl drop-shadow-sm">Best Sellers</h1>
//       </div>
//       <div className="flex justify-center items-center gap-4 p-10 flex-wrap">
//         {bestSellerData.data.map((e, i) => {
//           return <CardCom key={i} data={e} />;
//         })}
//       </div>
//     </>
//   );
// }

export default function BestSellerCom() {
  const [bestSellerData, setBestSellerData] = useState([]);
  let { searchText } = useContext(SearchData);
  useEffect(() => {
    let filterdata = WatchData.sort((a, b) => {
      return b.bestSeller - a.bestSeller;
    });
    // console.log("filterdata,filterdata", filterdata);
    setBestSellerData(filterdata.slice(0, 5));
  }, [searchText]);
  return (
    <>
      <div
        className=" d-flex  flex-wrap"
        style={{
          gap: "25px",
          padding: "0px 60px",
          margin: "auto",
          borderRadius: "20px",
        }}
      >
        <div className="bs text-center">
          <h5 className="text-xl font-bold drop-shadow-sm">Check Out</h5>
          <h1 className="text-6xl drop-shadow-sm">Best selling Product</h1>
        </div>
      </div>
      <div>
        {bestSellerData.map((e, i) => {
          return <CardCom key={i} productData={e} />;
        })}
      </div>
    </>
  );
}
