import { Button } from "reactstrap";

// import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Heart, ShoppingBag } from "lucide-react";

export default function CardCom({ productData }) {
  return (
    <div className="Card">
      <Card
        style={{
          width: "18rem",
          height: "28rem",
          // justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#197149",
          borderRadius: "10px",
          border: "1px solid gold",
          overflow: "hidden",
        }}
      >
        <img alt="Sample" src={productData.img} className="proimg" />
        <CardBody>
          <CardTitle tag="h6" style={{ color: "goldenrod" }}>
            {productData?.model}
          </CardTitle>
          <CardSubtitle className="mb-2" tag="h6" style={{ color: "white" }}>
            {productData?.Price}
          </CardSubtitle>
          <Button color="warning" outline className="m-2 ms-4 ">
            Buy <ShoppingBag />
          </Button>

          <Button color="warning" outline className="m-2 me-4">
            <Heart />
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
CardCom.propTypes = {
  productData: PropTypes.object.isRequired,
};
