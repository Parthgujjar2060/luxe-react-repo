import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import "../styles/carListing.css";
import { getQueriedCars } from "../services";

const CarListing = () => {
  const [selectedCarModels, setSelectedCarModels] = useState([]);

  useEffect(() => {
 
    console.log("Selected Car Models:", selectedCarModels);
  }, [selectedCarModels]);

  const getCarModels = async (carType) => {
    console.log('Getting car models for:', carType);
    try {
      console.log('Making API call for:', carType);
      const cars = await getQueriedCars({ carType });
      console.log(`Cars for ${carType}:`, cars.cars);
      setSelectedCarModels((prevModels) => [...prevModels, ...cars.cars]);
    } catch (error) {
      console.error('Error getting car models:', error);
    }
  };

  const resetSelection = () => {
    setSelectedCarModels([]);
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                {/* ... (your sorting dropdown) */}

                <div className="dropdown">
                  <button className="dropbtn" onClick={resetSelection}>
                    Car Models
                  </button>
                  <div className="dropdown-content">
                    <button onClick={() => getCarModels('sedan')}>Sedan</button>
                    <button onClick={() => getCarModels('hatchback')}>Hatchback</button>
                    <button onClick={() => getCarModels('suv')}>SUV</button>
                    <button onClick={() => getCarModels('sports')}>Sport</button>
                  </div>
                </div>
              </div>
            </Col>

            {/* Render CarItems for selectedCarModels */}
            {selectedCarModels.map((car) => (
              <CarItem key={car.carType} car={car} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
