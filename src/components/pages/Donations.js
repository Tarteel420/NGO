import React, { useState } from "react";

function Donations() {
  const formContainerStyles = {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "100px auto",
  };

  const donationButtonsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  };

  const donationButtonStyles = {
    width: "100px",
    margin: "0 10px",
    background: "#aad8cd",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    agree: false,
    donationAmount: 0,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your logic here to send the form data to a backend or perform any other action.
  };

  return (
    <div className="video-container">
      <video
        className="bg-video"
        src="../videos/donations.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          top: "0",
          left: "0",
          objectFit: "cover",
        }}
      />
      
      <div style={formContainerStyles}>
        <div style={donationButtonsContainerStyles}>
          <p>Choose an amount to give per month:</p>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, donationAmount: 10 })}
            style={donationButtonStyles}
          >
            $10
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, donationAmount: 20 })}
            style={donationButtonStyles}
          >
            $20
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              style={{ marginLeft: "0", marginTop: "10px", width: "100%" }}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              style={{ marginLeft: "0", marginTop: "10px", width: "100%" }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              style={{ marginLeft: "0", marginTop: "10px", width: "100%" }}
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>
              <input
                style={{ marginTop: "10px" }}
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleInputChange}
                required
              />
              Yes, I would like to receive communications by email and know how my donation is driving change in the lives of vulnerable children.
            </label>
          </div>
          <button type="submit" style={{ marginTop: "20px", background: "#aad8cd" }}>
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Donations;
