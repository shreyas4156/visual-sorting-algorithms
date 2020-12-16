import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Modal,
  ModalHeader,
} from "reactstrap";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

const Header = ({ valueChange, resetArray, sort, changeAlgo, algo, size }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(50);
  const [modal, setModal] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleClick = (str) => {
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 15000);
    changeAlgo(str);
  };
  const toggleModal = () => setModal(!modal);
  return (
    <Navbar className="nav" color="dark" dark expand="md sm">
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Tip: After clicking on "Sort" button, please don't try to click any
          other buttons until the bars are sorted
        </ModalHeader>
      </Modal>
      <NavItem>
        <NavLink style={{ color: "#F5F3F3" }} href="/">
          Graph Visualizer
        </NavLink>
      </NavItem>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav style={{ textAlign: "center" }} className="mr-auto" navbar>
          <NavItem>
            <NavLink
              id="nav"
              className={algo === "merge" ? "active" : "notActive"}
              onClick={() => handleClick("merge")}
            >
              Merge Sort
            </NavLink>
          </NavItem>
          <div className="vl"></div>
          <NavItem>
            <NavLink
              id="nav"
              className={algo === "quick" ? "active" : "notActive"}
              onClick={() => handleClick("quick")}
            >
              Quick Sort
            </NavLink>
          </NavItem>
          <div className="vl"></div>
          <NavItem>
            <NavLink
              id="nav"
              className={algo === "heap" ? "active" : "notActive"}
              onClick={() => handleClick("heap")}
            >
              Heap Sort
            </NavLink>
          </NavItem>
          <div className="vl"></div>
          <NavItem>
            <NavLink
              id="nav"
              className={algo === "bubble" ? "active" : "notActive"}
              onClick={() => handleClick("bubble")}
            >
              Bubble Sort
            </NavLink>
          </NavItem>
          <div className="vl"></div>
          <NavItem>
            <NavLink id="nav" onClick={() => resetArray(size)}>
              Generate new Bars
            </NavLink>
          </NavItem>
          {algo ? (
            <div>
              <NavItem>
                <NavLink
                  className="sortIcon"
                  style={{ color: "#F4F4F4", borderBottomStyle: "solid" }}
                  id="nav"
                  onClick={() => sort(algo)}
                >
                  Sort
                </NavLink>
              </NavItem>
            </div>
          ) : null}
        </Nav>

        <RangeSlider
          value={value}
          variant="secondary"
          tooltip="off"
          min={10}
          max={170}
          onChange={(changeEvent) => {
            setValue(changeEvent.target.value);
            valueChange(value);
          }}
        />
        <NavbarText style={{ marginLeft: "10px" }}>
          Adjust the input here
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Header;
