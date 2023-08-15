import { Button } from "reactstrap";

// import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Heart, ShoppingBag } from "lucide-react";

export default function CardCom({ productData }) {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          height: "35rem",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "silver",
        }}
      >
        <img alt="Sample" src={productData.img} className="" />
        <CardBody>
          <CardTitle tag="h5">{productData?.model}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {productData?.Price}
          </CardSubtitle>
          <Button color="danger" outline className="m-1 ms-4 ">
            Buy <ShoppingBag />
          </Button>

          <Button color="danger" outline className="m-1 me-4">
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
