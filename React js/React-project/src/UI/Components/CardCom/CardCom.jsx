import { Button } from "reactstrap";

// import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Heart } from "lucide-react";

export default function CardCom({ productData }) {
  return (
    <>
      <Card
        className="cards"
        style={{
          width: "18rem",
          borderColor: "black",
          padding: "10px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div>
          <img alt="Sample" src={productData.img} className="img pb-3" />
        </div>

        <CardBody style={{ padding: "0px" }}>
          <CardTitle tag="h6" style={{ color: "goldenrod", fontSize: "12px" }}>
            {productData?.categories}
          </CardTitle>

          <CardSubtitle
            className="mb-2 font-medium"
            tag="h5"
            style={{ fontSize: "13.5px" }}
          >
            {productData?.model}
          </CardSubtitle>

          <CardTitle tag="h5" className="text-base font-normal pb-3">
            {productData?.gender}
          </CardTitle>

          <CardTitle tag="h5" className="text-base font-normal pb-3">
            {productData?.price}
          </CardTitle>

          <div className="text-center">
            <button className="btnn">Buy Now</button>
          </div>

          <Button color="warning" outline className="m-2 me-4">
            <Heart />
          </Button>
          <div className="position"></div>
        </CardBody>
      </Card>
    </>
  );
}
CardCom.propTypes = {
  productData: PropTypes.object.isRequired,
};
