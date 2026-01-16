import React from 'react'
import './Features.css'

const Features = () => {
    const features = [
        {
            title: 'Real Time Tracking',
            description: 'Live track your vehicle on mobile and be always aware of its location.',
            image: '/feature-realtime.jpg'
        },
        {
            title: 'Daily History',
            description: 'Watch full-day travel history and key driving points in 10 secs.',
            image: '/feature-history.jpg'
        },
        {
            title: 'Remote Engine Access',
            description: 'Lock your engine from anywhere with the help of your mobile.',
            image: '/feature-remote.jpg'
        },
        {
            title: 'Set Geo-Fences',
            description: 'Define safe areas and get notified when a vehicle enters/exits.',
            image: '/feature-geofence.jpg'
        },
        {
            title: 'Multiple Alerts',
            description: 'Instant alerts of typical events such as Vibration, Anti-theft, Geo-fence, Speeding, etc.',
            image: '/feature-alerts.jpg'
        },
        {
            title: 'Reports',
            description: 'Get reports on Routes, Events, Trips, Stops, and Playback History of the past 90 days.',
            image: '/feature-reports.jpg'
        }
    ]

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header">
                    <h2>Our Features</h2>
                    <p>With Trackon GPS app, you can put your mind at ease knowing that no matter where you or your vehicle is, you will always be able to find it. You can also easily manage our powerful tracking functions.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                            <div className="feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features