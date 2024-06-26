import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = ({ car }) => {
  const { photo, model, name, price } = car;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={photo} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
          <h6 className="rent__price text-center mt-">{price}.00 <span>/ Day</span></h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {model}
            </span>
          </div>

          {/* Pass the name of the car as a parameter to the Details link */}
          <button className="w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${name}`}>Details</Link>
          </button>

          <button className="w-50 car__item-btn car__btn-details">
            Booking
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
