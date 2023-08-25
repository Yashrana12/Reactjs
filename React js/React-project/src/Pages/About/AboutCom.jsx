import React from "react";
import HeaderCom from "../../UI/Components/HeaderCom/HeaderCom";
import { Content } from "antd/es/layout/layout";
import { Container } from "reactstrap";
import FooterCom from "../../UI/Components/FooterCom/FooterCom";
import "../About/About.css";

export default function AboutCom() {
  return (
    <>
      <HeaderCom />
      <Content>
        <div className="about-home">
          <div className="about-page">
            <Container>
              <div className="about-text">
                <p className="mb-0 text-xl font-bold">
                  {" "}
                  prestigious, high-end, iconic, timeless, and sophisticated.
                </p>
                <h1 className="text-7xl font-light">About Us</h1>
              </div>
            </Container>
          </div>
        </div>
      </Content>
      <FooterCom />
    </>
  );
}
