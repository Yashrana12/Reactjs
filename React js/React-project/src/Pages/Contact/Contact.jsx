import React from "react";
import HeaderCom from "../../UI/Components/HeaderCom/HeaderCom";
import FooterCom from "../../UI/Components/FooterCom/FooterCom";
import { Content } from "antd/es/layout/layout";
import { Container, FormGroup, Label } from "reactstrap";
import { Col, Layout, Row } from "antd";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Iframe from "react-iframe";
import { useForm } from "antd/es/form/Form";

function Contact() {
  let {
    register,
    handleSubmit,
    watch,
    fromState: { errors },
  } = useForm;

  let onSubmit = (data) => {
    if (data) {
      data = 0;
    } else {
      null;
    }
  };

  console.log(watch("test"));

  let { Content } = Layout;
  return (
    <>
      <HeaderCom />
      <Content className="contact">
        <Container className="py-5">
          <div className="contact-head text-center py-5">
            <p className="text-lg drop-shadow-xl font-semibold mb-0">
              get in touch
            </p>
            <h1 className="text-8xl font-light">Contact</h1>
          </div>
          <hr className="pb-10 text-black m-auto" style={{ width: "60%" }} />
          <Row className="px-64 pb-10 contact-flex">
            <Col style={{ flex: 1 }} className="col1">
              <p className="uppercase text-xl font-medium contact-flex1">
                Contact Details
              </p>
              <p className="text-base font-medium mb-0">P: +91 1234567890</p>
              <p className="text-base font-medium mb-0">
                E: rolexInfo@example.com
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Label className=" popince text-base font-semibold block pt-3 mb-0">
                  Name
                </Label>
                <Row className="justify-between contact-name-flex">
                  <Col>
                    <input
                      {...register("firstName", { required: true })}
                      className="p-3 w-48 outline-none border-2 border-black"
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <span className="block">This field is required</span>
                    )}
                    <Label className=" popince text-sm font-medium block pt-1 mb-0 ">
                      First
                    </Label>
                  </Col>
                  <Col>
                    <input
                      {...register("lastName", { required: true })}
                      className="p-3 w-48 border-2 border-black"
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <span className="block">This field is required</span>
                    )}
                    <Label className="popince text-sm font-medium block pt-1 mb-0">
                      Last
                    </Label>
                  </Col>
                </Row>

                <FormGroup>
                  <Label className="popince text-base font-semibold block pt-3 mb-0">
                    Email
                  </Label>
                  <input
                    {...register("lastName", { required: true })}
                    className="p-3 block w-100 border-2 border-black"
                    placeholder="Enter Email"
                    type="email"
                  />
                  {errors.lastName && <span>This field is required</span>}
                </FormGroup>

                <FormGroup>
                  <Label className="popince text-base font-semibold block pt-3 mb-0">
                    Message
                  </Label>
                  <input
                    {...register("message", { required: true })}
                    className="p-3 block w-100 h-32 border-2 border-black "
                    type="text"
                  />
                  {errors.message && <span>This field is required</span>}
                </FormGroup>

                <button
                  type="submit"
                  className="mt-3 button bg-sky-500 hover:bg-sky-700 tracking-wider font-semibold"
                >
                  SEND
                </button>
              </form>
            </Col>
          </Row>

          <Iframe
            src="https://www.google.com/maps/place/Luxury+Time+Surat/@21.1757177,72.8109952,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04e7325c2a6fb:0x9adfdab4e0314cf3!8m2!3d21.1757147!4d72.8125294!16s%2Fg%2F11cp7rz0fm?entry=ttu"
            height="450"
            width="100%"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="px-64 iframe"
          ></Iframe>
        </Container>
      </Content>

      <FooterCom />
    </>
  );
}

export default Contact;
