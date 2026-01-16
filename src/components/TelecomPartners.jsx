import React from 'react'
import './TelecomPartners.css'

const TelecomPartners = () => {
    return (
        <section className="telecom-partners">
            <div className="container">
                <div className="section-header">
                    <h2>Our Telecom Partners</h2>
                    <p>Our partners are the best in their business, allowing us to provide you with the best-in-class service! We work in tandem to serve your best interest.</p>
                </div>

                <div className="partners-logos">
                    <img src="/ntc-logo.png" alt="NTC Nepal" />
                    <img src="/ncell-logo.png" alt="Ncell" />
                </div>
            </div>
        </section>
    )
}

export default TelecomPartners