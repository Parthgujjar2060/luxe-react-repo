import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import {DriverForm} from "./DriverForm.jsx";
import driverImg from "../../assets/all-images/BMWphoto.png";

// this should ope an new form

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12"  className="become__driver-img" >
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <button  className="btn become__driver-btn mt-4">
              Become a Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
