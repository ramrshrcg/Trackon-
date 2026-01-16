import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Buy GPS Tracker For Bike and Car Online</h1>
                        <p>Track your vehicle in real-time with Nepal's most trusted GPS tracking system</p>
                        <div className="hero-actions">
                            <a href="#products" className="cta-button">Shop Now</a>
                            <a href="https://wa.me/+9779820754740" className="whatsapp-button">
                                WhatsApp: 9820754740
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/hero-gps-device.jpg" alt="GPS Tracking Device" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero