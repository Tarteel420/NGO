import React, { useState } from 'react';
import countries from 'countries-list';
import './VolunteerForm.css';



const VolunteerForm = () => {

    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        Country: '',
        profession: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            address: '',
            Country: '',
            profession: '',
        });
        setSubmitted(true);
    };

    const countryOptions = Object.entries(countries.countries).map(([code, country]) => (
        <option key={code} value={country.name}>
            {country.name}
        </option>
    ));


    return (
        <>


            <div>

                {submitted ? (
                    <div>
                        <img className='success-gif' src='./videos/success1.gif' />
                        <h2 className='submitting-text'>Thank You for Submitting!</h2>
                        <h5 className='submitting-text'>We will get back to you soon.</h5>

                    </div>
                ) : (



                    <form onSubmit={handleSubmit} className="volunteer-form">
                        <div>
                            <h2 className='vol-text'>Become a Volunteer</h2>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country:</label>
                            <select
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Country</option>
                                {countryOptions}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="profession">What is your profession?</label>
                            <input
                                type="text"
                                id="profession"
                                name="profession"
                                value={formData.profession}
                                onChange={handleChange}

                            />
                            <div className="form-group">
                                <label htmlFor="profession">Choose your picture:</label>
                                <input type="file" accept="image/*" onChange={handleImageUpload} required />
                                {selectedImage && ( 
                                <img src={selectedImage} alt="Uploaded" 
                                style={{ maxWidth: '200px', maxHeight: '200px' }}
                                 />
                                )}
                            </div>
                        </div>
                        <div className="button-container">
                            <button type="submit" className='submit-form-btn'>Submit</button>
                        </div>
                    </form>
                )}
            </div>

        </>
    );

};


export default VolunteerForm;
