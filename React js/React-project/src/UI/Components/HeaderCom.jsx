// import { Layout, Menu, theme } from "antd";
import { Search, ShoppingCart } from "lucide-react";
import PropTypes from "prop-types";
import "../../Pages/Home/HomeCom.css";

import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
export default function HeaderCom({ setSearchText }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="headercom">
        <div>
          <Navbar expand={"lg"} color="white">
            <NavbarBrand href="/" style={{ flex: "0.2" }}>
              <img
                src="https://logowik.com/content/uploads/images/275_rolex.jpg"
                alt="logo"
                width={100}
                height={100}
                style={{ padding: "10px 0px" }}
                className="logo flex=1 color-white"
              />
            </NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto pt-3 " navbar style={{ flex: "0.5" }}>
                <NavItem>
                  <NavLink href="">Man</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Woman</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Exclusive</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Best Saller</NavLink>
                </NavItem>
              </Nav>
              <ShoppingCart color="#363535" />

              <input
                type="text"
                className=" rounded-1  w-25 p-1 m-2"
                placeholder="Search Your Product"
                style={{
                  outline: "none ",
                  border: "1px solid rgb(135,135,135)",
                }}
                onChange={(e) => setSearchText(e.target.value)}
                name=""
                id=""
              />
            </Collapse>
            <Search className="" color="#363535" />
          </Navbar>
        </div>
      </div>
    </>
  );
}
HeaderCom.PropType = {
  setSearchText: PropTypes.object.isRequired,
};
