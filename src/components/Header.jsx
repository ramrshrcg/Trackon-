import React, { useState } from 'react'
import './Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src="/trackon-logo.png" alt="Trackon GPS" />
                </div>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#products">Products</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="header-actions">
                    <div className="contact-info">
                        <span>📞 9820754740</span>
                        <span>📞 9820754741</span>
                    </div>
                    <a href="https://wa.me/+9779820754740" className="whatsapp-btn">
                        WhatsApp
                    </a>
                </div>

                <div
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </div>
            </div>
        </header>
    )
}

export default Header