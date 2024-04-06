import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import "../styles/carListing.css";
import { getQueriedCars } from "../services/carFetch";

const CarListing = () => {
  const [selectedCarModels, setSelectedCarModels] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getCars = async (carType) => {
    setSelectedCarModels([]);
    try {
      const { cars } = await getQueriedCars({ carType });
      setSelectedCarModels(cars);
      closeDropdown();
    } catch (error) {
      console.error('Error getting car models:', error);
    }
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "txm5Wv5V-R-8feHm4pcmf");
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <div className="dropdown">
                  <button className="dropbtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    Car Models
                  </button>
                  {dropdownOpen && (
                    <div className="dropdown-content">
                      <button onClick={() => getCars('sedan')}>Sedan</button>
                      <button onClick={() => getCars('hatchback')}>Hatchback</button>
                      <button onClick={() => getCars('suv')}>SUV</button>
                      <button onClick={() => getCars('sports')}>Sport</button>
                    </div>
                  )}
                </div>
              </div>
            </Col>

            {selectedCarModels.map((car) => (
              <CarItem key={car.carType} car={car} />
            ))}
          </Row>
        </Container>
      </section>

      {/* Embed chatbot script here */}
      <script
        src="https://www.chatbase.co/embed.min.js"
        chatbotId="txm5Wv5V-R-8feHm4pcmf"
        domain="www.chatbase.co"
        defer
      ></script>
    </Helmet>
  );
};

export default CarListing;
