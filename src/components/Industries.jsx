import React from 'react'
import './Industries.css'

const Industries = () => {
    const industries = [
        'Fleet Vehicle Tracking',
        'Asset Tracking',
        'Public Transport',
        'School Bus',
        'Ambulance',
        'Motorcycles Tracking'
    ]

    return (
        <section className="industries">
            <div className="container">
                <div className="industries-content">
                    <div className="industries-text">
                        <h2>Industries We Cover</h2>
                        <div className="industries-list">
                            {industries.map((industry, index) => (
                                <a key={index} href="#" className="industry-link">
                                    {industry}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="industries-image">
                        <img src="/vehicles-on-map.jpg" alt="Vehicles on Map" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Industries