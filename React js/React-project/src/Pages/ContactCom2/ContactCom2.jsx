import React from "react";
import HeaderCom from "../../UI/Components/HeaderCom/HeaderCom";
import { Content } from "antd/es/layout/layout";
import { Container, FormGroup } from "reactstrap";
import { Col, Form, Layout, Row } from "antd";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Iframe from "react-iframe";
import { useState } from "react";
import FooterCom from "../../UI/Components/FooterCom/FooterCom";

const emailData = [
  {
    email: "yrana5927@gmail.com",
  },
];

function ContactCom2() {
  const [userData, SetUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  let [storedata, SetStoreData] = useState([]);

  function setData(e) {
    SetUsrData({ ...userData, [e.target.name]: e.target.value });
  }

  function submitData() {
    SetStoreData(...storedata, userData);
  }

  const { Content } = Layout;

  return (
    <>
      <HeaderCom />
      <Content className="contact ">
        <Container className="py-5">
          <div className="contact-head text-center py-5">
            <p className="text-lg drop-shadow-xl font-semibold mb-0">
              get in touch
            </p>
            <h1 className="text-8xl font-light">Contact</h1>
          </div>
          <hr className="pb-10 text-black m-auto" style={{ width: "60%" }} />
          <Row className="px-64 pb-10">
            <Col style={{ flex: 1 }}>
              <p className="uppercase text-xl font-medium contact-flex1">
                Contact Details
              </p>
              <p className="text-base font-medium mb-0">P: +91 1234567890</p>
              <p className="text-base font-medium mb-0">
                E: RolexInfo@example.com
              </p>
              <p className="text-base font-medium mb-0 pb-10">
                A: Badani Chambers, Ghod Dod Rd, opposite Ramji Mandir, Surat,
                Gujarat 395003
              </p>
              <p className="uppercase text-xl font-medium contact-flex1">
                Follow Us
              </p>
              <div className="symbol">
                <ol className="flex justify-start gap-3 p-0">
                  <li>
                    <a className="no-underline text-black" href="">
                      <Facebook
                        className="text-3xl p-1"
                        style={{
                          border: "1px solid gray",
                          borderRadius: "50%",
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a className="no-underline text-black" href="">
                      <Instagram
                        className="text-3xl p-1"
                        style={{
                          border: "1px solid gray",
                          borderRadius: "50%",
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a className="no-underline text-black" href="">
                      <Youtube
                        className="text-3xl p-1"
                        style={{
                          border: "1px solid gray",
                          borderRadius: "50%",
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a className="no-underline text-black" href="">
                      <Linkedin
                        className="text-3xl p-1"
                        style={{
                          border: "1px solid gray",
                          borderRadius: "50%",
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a className="no-underline text-black" href="">
                      <Twitter
                        className="text-3xl p-1"
                        style={{
                          border: "1px solid gray",
                          borderRadius: "50%",
                        }}
                      />
                    </a>
                  </li>
                </ol>
              </div>
            </Col>
            <Col style={{ flex: 1.1 }}>
              <Form>
                <Row className="justify-between gap-3 name">
                  <Col className="flex-1">
                    <Form.Label className="mb-0">First Name</Form.Label>
                    <Form.Control
                      placeholder="First name"
                      className="name"
                      name="firstName"
                      value={userData.firstName}
                      onChange={(e) => setData(e)}
                    />
                  </Col>
                  <Col className="flex-1">
                    <Form.Label className="mb-0">Last Name</Form.Label>
                    <Form.Control
                      placeholder="Last name"
                      className="name"
                      name="lastName"
                      value={userData.lastName}
                      onChange={(e) => setData(e)}
                    />
                  </Col>
                </Row>

                <FormGroup>
                  <Form.Label className="mb-0 mt-3">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={userData.email}
                    onChange={(e) => setData(e)}
                  />
                </FormGroup>

                <FormGroup>
                  <Form.Label className="mb-0 mt-3">Message</Form.Label>
                  <Form.Control
                    type="textarea"
                    placeholder="Enter message"
                    className="h-32"
                    name="message"
                    value={userData.message}
                    onChange={(e) => setData(e)}
                  />
                </FormGroup>

                <button
                  type="submit"
                  className="tracking-widest font-semibold mt-4 uppercase button bg-sky-500 hover:bg-sky-700"
                  onClick={() => submitData()}
                >
                  Send
                </button>
              </Form>
            </Col>
          </Row>

          <Iframe
            src="https://www.google.com/maps/place/Luxury+Time+Surat/@21.1757177,72.8109952,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04e7325c2a6fb:0x9adfdab4e0314cf3!8m2!3d21.1757147!4d72.8125294!16s%2Fg%2F11cp7rz0fm?entry=ttu"
            height="450"
            width="100%"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="px-64"
          ></Iframe>
        </Container>
      </Content>
      <FooterCom />
    </>
  );
}

export default ContactCom2;
