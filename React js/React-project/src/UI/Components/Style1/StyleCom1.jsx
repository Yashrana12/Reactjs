import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "../Style1/StyleCom1.css"

export default function StyleCom1() {
  return (
    <>
      <div className="style1">
        <Container className="p-0">
          <Row
            className="justify-center items-center frag 
                    sm:flex-col"
          >
            <Col
              className="flex-1 flex justify-end rel 
                        sm:flex-col"
            >
              <div className="img1">
                <img />
              </div>
              <div className="img2">
                <img />
              </div>
            </Col>
            <Col
              className="fontt flex-1
                        sm:text-center"
            >
              <h5 className="font-semibold tracking-wider">New watches 2023</h5>
              <h1 className="text-6xl">The</h1>
              <h1 className="text-6xl">new</h1>
              <h1 className="text-6xl">watches</h1>
              <div className="rightpara ps-20 text-lg font-extrabold pb-3 text-justify sm:ps-0">
                <p>
                  With its latest creations, Rolex demonstrates its perpetual
                  pursuit of excellence.
                </p>
              </div>
              <div
                className="flex justify-end 
                            sm:justify-center"
              >
                <Link to="/Products">
                  <button className="button uppercase font-bold text-base">
                    Shop now
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
