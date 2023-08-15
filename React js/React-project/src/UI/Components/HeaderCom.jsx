// import { Layout, Menu, theme } from "antd";
import { Search, ShoppingCart, Watch } from "lucide-react";
import PropTypes from "prop-types";

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
      <div>
        <div>
          <Navbar expand={"lg"}>
            <NavbarBrand href="/">
              <Watch style={{ color: "" }} />
              Watches
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="">Man</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Woman</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Exclusive</NavLink>
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
