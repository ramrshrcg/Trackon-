import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-form-section">
                        <h2>Request a Callback</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                            ></textarea>
                            <button type="submit" className="send-btn">Send</button>
                        </form>
                    </div>

                    <div className="contact-image">
                        <img src="/callback-image.png" alt="Contact Us" />
                    </div>
                </div>

                <div className="map-section">
                    <h2>Find us on Map</h2>
                    <div className="map-placeholder">
                        <p>Map: Dharan Line, Itahari-4, Sunsari</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact