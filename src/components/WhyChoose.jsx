import React from 'react'
import './WhyChoose.css'

const WhyChoose = () => {
    const stats = [
        { icon: '📱', number: '1000+', label: 'App Downloads' },
        { icon: '🏢', number: '100+', label: 'Small Businesses' },
        { icon: '🤝', number: '20+', label: 'B2B Business' },
        { icon: '🏪', number: '10+', label: 'National Wide Dealers' },
        { icon: '📡', number: '5000+', label: 'Devices Online' },
        { icon: '👥', number: '1000+', label: 'Daily Active Users' }
    ]

    return (
        <section className="why-choose">
            <div className="container">
                <div className="why-choose-content">
                    <div className="why-choose-text">
                        <h2>Why Choose Trackon GPS?</h2>
                        <p>As a leading GPS tracking company in Nepal, Trackon GPS holds the strongest position amongst similar companies. Since our launch in 2021, we have always focused on providing excellent Customer Service and upgrading various Products Features.</p>
                    </div>

                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <span className="stat-icon">{stat.icon}</span>
                                <h3>{stat.number}</h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="why-choose-image">
                    <img src="/why-choose-slider.jpg" alt="Why Choose Trackon GPS" />
                </div>
            </div>
        </section>
    )
}

export default WhyChoose