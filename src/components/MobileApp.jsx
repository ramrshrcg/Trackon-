import React from 'react'
import './MobileApp.css'

const MobileApp = () => {
    return (
        <section className="mobile-app">
            <div className="container">
                <div className="mobile-app-content">
                    <div className="app-info">
                        <h2>Mobile App</h2>
                        <p>With the Trackon GPS app, you always have an overview of your vehicles in real-time. In seconds, GPS vehicle tracking app allows you to locate your vehicles, notifies about unusual movements of your vehicles, and has theft protection.</p>

                        <div className="theft-stats">
                            <h3>1 Bike is Stolen every 30 Minutes</h3>
                            <p>Locate stolen vehicles without breaking the wallet. At Trackon, we are vehicle owners too, and we understand what it takes to keep our vehicles safe. So we developed Trackon GPS, for regular users, an efficient and affordable vehicle tracking solution.</p>
                        </div>

                        <div className="app-downloads">
                            <a href="https://bit.ly/3Dj2LDM" className="download-btn google-play">
                                <img src="/google-play.png" alt="Google Play" />
                            </a>
                            <a href="https://apple.co/3uR0RHy" className="download-btn app-store">
                                <img src="/app-store.png" alt="App Store" />
                            </a>
                        </div>
                    </div>

                    <div className="app-mockup">
                        <img src="/app-mockup.jpg" alt="Trackon GPS Mobile App" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MobileApp