import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { carName } = useParams();
  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedCarData = JSON.parse(localStorage.getItem('carData'));
    if (storedCarData) {
      const selectedCar = storedCarData.find(car => car.carName === carName);
      if (selectedCar) {
        setCarData(selectedCar);
      }
    }
    setLoading(false);
  }, [carName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [carData]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!carData) {
    return <div>Car not found in local storage</div>;
  }

  return (
    <Helmet title={carData.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={carData.photo} alt="" className="w-100" />
            </Col>
            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{carData.carName}</h2>
                <p>Price: {carData.price}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="7">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>
            <Col lg="5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
