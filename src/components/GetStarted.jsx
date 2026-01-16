import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
    const steps = [
        {
            icon: '📡',
            title: 'You will need a GPS Tracker',
            description: 'A GPS Tracker is needed to transmit the real-time location of the vehicle to the Trackon cloud server.'
        },
        {
            icon: '📱',
            title: 'You will need a SIM card',
            description: 'The GPS Tracker needs internet connectivity to send the data over the GSM network.'
        },
        {
            icon: '🔧',
            title: 'Install the GPS Tracker',
            description: 'Get the GPS Tracker installed with the help of any local technician near you.'
        },
        {
            icon: '✅',
            title: 'Activate the GPS Tracker',
            description: 'Download Trackon App from Playstore/Appstore and signup and call our customer support team.'
        }
    ]

    return (
        <section className="get-started">
            <div className="container">
                <div className="section-header">
                    <h2>Get started in 4 steps</h2>
                </div>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default GetStarted