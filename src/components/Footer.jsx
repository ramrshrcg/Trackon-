import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-main">
                        <div className="footer-brand">
                            <img src="/trackon-secondary-logo.png" alt="Trackon GPS" />
                            <p>Trackon Nepal Pvt. Ltd. is a GPS Tracking company, offering professional vehicle tracking and fleet management solutions in Nepal.</p>
                            <p>We provide Trackon GPS, the most affordable and innovative tracking system on the market today. Our GPS trackers are scalable and can offer extensive functionality, depending on your needs.</p>
                        </div>

                        <div className="footer-links">
                            <div className="footer-column">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="/faq">FAQ</a></li>
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="/terms-conditions">Terms and Conditions</a></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li>Customer Care: <a href="tel:9820754740">9820754740</a>, <a href="tel:9820754741">9820754741</a></li>
                                    <li>WhatsApp: <a href="https://wa.me/+9779820754740">9820754740</a></li>
                                    <li>Working hours: 10:00 am - 6:00 pm</li>
                                    <li>Email: <a href="mailto:contact@trackongps.com">contact@trackongps.com</a></li>
                                    <li>Address: Dharan Line, Itahari-4, Sunsari</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="app-downloads-footer">
                        <a href="https://bit.ly/3Dj2LDM">
                            <img src="/google-play.png" alt="Google Play" />
                        </a>
                        <a href="https://apple.co/3uR0RHy">
                            <img src="/app-store.png" alt="App Store" />
                        </a>
                    </div>

                    <div className="social-media">
                        <a href="https://www.facebook.com/trackonnepal">📘</a>
                        <a href="https://twitter.com/trackonnepal">🐦</a>
                        <a href="http://instagram.com/trackonnepal">📷</a>
                        <a href="https://www.youtube.com/channel/UCaC1_IxWdMn2vl_qoY-Chpw">📺</a>
                        <a href="https://www.linkedin.com/company/trackonnepal">💼</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2022, Trackon Nepal Pvt. Ltd.</p>

                    <div className="logistic-partners">
                        <h4>Logistic Partners</h4>
                        <img src="/nepal-can-move-logo.jpg" alt="Nepal Can Move" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer