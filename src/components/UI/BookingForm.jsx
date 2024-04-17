import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { submitBookingData } from "../../services/authenticate";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        personCount: "1 person",
        luggageCount: "1 luggage",
        startDate: "",
        endDate: "",
        carId: null  
    });

    const sessionToken = localStorage.getItem("sessionToken");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCarChange = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            carId: value  
        });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");  
        const year = date.getFullYear();
        return `${day}${month}${year}`;
    };

    const submitHandler = async (event) => {
      event.preventDefault();
  
      const formattedData = {
          ...formData
      };
  
      try {
          const response = await submitBookingData(formattedData, sessionToken);
          console.log("Success:", response);
      } catch (error) {
          console.error("Error:", error);
      }
  };


    return (
        <Form onSubmit={submitHandler}>
            {/* Car selection dropdown */}
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <select
                    name="carId"
                    value={formData.carId}
                    onChange={handleCarChange} 
                >
                    <option value="">Select a car</option>
                    {localStorage.getItem("cars") && JSON.parse(localStorage.getItem("cars")).map((car) => (
                        <option key={car._id} value={car._id}>{car.name}</option>
                    ))}
                </select>
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                    type="number"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input
                    type="text"
                    placeholder="From Address"
                    name="fromAddress"
                    value={formData.fromAddress}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                    type="text"
                    placeholder="To Address"
                    name="toAddress"
                    value={formData.toAddress}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <select
                    name="personCount"
                    value={formData.personCount}
                    onChange={handleChange}
                >
                    <option value="1 person">1 Person</option>
                    <option value="2 person">2 Person</option>
                    <option value="3 person">3 Person</option>
                    <option value="4 person">4 Person</option>
                    <option value="5+ person">5+ Person</option>
                </select>
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <select
                    name="luggageCount"
                    value={formData.luggageCount}
                    onChange={handleChange}
                >
                    <option value="1 luggage">1 luggage</option>
                    <option value="2 luggage">2 luggage</option>
                    <option value="3 luggage">3 luggage</option>
                    <option value="4 luggage">4 luggage</option>
                    <option value="5+ luggage">5+ luggage</option>
                </select>
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input
                    type="date"
                    placeholder="Start Date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input
                    type="date"
                    placeholder="End Date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <textarea
                    rows={5}
                    type="textarea"
                    className="textarea"
                    placeholder="Write"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                ></textarea>
            </FormGroup>
            <button type="submit">Submit</button>
        </Form>
    );
};

export default BookingForm;
