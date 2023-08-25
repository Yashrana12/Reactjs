import PropTypes from "prop-types";
import "../HeaderCom/HeaderCom.css";
import { SearchData } from "../../../App";
// import WatchData from "../../../Utils/WatchData.json";
import { NavbarBrand } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useContext } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

export default function HeaderCom() {
  let dataSearch = useContext(SearchData);
  const { SetSearchText } = dataSearch.searchText;

  return (
    <>
      <Navbar expand="lg" className="bg-white uppercase">
        <Container className="py-2 px-0 cont">
          <NavbarBrand className="p-0">
            <Nav.Link
              className="logo"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to="/" className="no-underline text-black">
                <img
                  src="https://www.freepnglogos.com/uploads/rolex-png-logo/rolex-emblem-png-logo-4.png"
                  style={{
                    height: "75px",
                    width: "75px",
                    justifyContent: "center",
                  }}
                  alt=""
                />
                {/* <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    letterSpacing: "10px",
                  }}
                >
                  Rolex
                </span>
              </Link>
              <Link to="/" className="no-underline text-black">
                <span
                  style={{
                    fontSize: "13px",
                    letterSpacing: "1px",
                  }}
                >
                  Watches
                </span> */}
              </Link>
            </Nav.Link>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto font-semibold"
              style={{
                flex: "2.2",
                fontSize: "16px",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <Link to="/Products" className="no-underline text-black">
                <Nav.Link href="#link">Products</Nav.Link>
              </Link>
              <Link to="/Exclusive" className="no-underline text-black">
                <Nav.Link href="#link">exclusive</Nav.Link>
              </Link>
              <Link to="/Women" className="no-underline text-black">
                <Nav.Link href="#home">women</Nav.Link>
              </Link>
              <Link to="/Men" className="no-underline text-black">
                <Nav.Link href="#home">men</Nav.Link>
              </Link>
              <Link to="/Exclusive" className="no-underline text-black">
                <Nav.Link href="#link">about</Nav.Link>
              </Link>
              <Link to="/Contact" className="text-black no-underline">
                <Nav.Link href="#link">contact</Nav.Link>
              </Link>
            </Nav>

            <Nav
              className="about"
              style={{
                flex: "1.8",
                justifyContent: "right",
                alignItems: "center",
                fontWeight: "500",
                fontSize: "16px",
              }}
            >
              <input
                type="text"
                className="outline-none border-3 border-black rounded-md ps-2 p-1 drop-shadow-lg"
                placeholder="Search Here"
                onChange={(e) => SetSearchText(e.target.value)}
              />
              <Nav.Link
                href="#link"
                style={{
                  fontSize: "25px",
                }}
              >
                <Search />
              </Nav.Link>
              <Nav.Link href="#link" style={{ fontSize: "25px" }}>
                <ShoppingCart />
              </Nav.Link>
              <Nav.Link href="#link" style={{ fontSize: "25px" }}>
                <User />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
HeaderCom.PropType = {
  setSearchText: PropTypes.object.isRequired,
};
