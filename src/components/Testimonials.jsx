import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Keveen Rai',
            role: 'Trackon Customer',
            image: '/customer-1.jpg',
            text: 'I liked its wide coverage so that I could use it in rural areas as well while traveling to my village.'
        },
        {
            name: 'Aalok Babu Bhattarai',
            role: 'Trackon Customer',
            image: '/customer-2.jpg',
            text: 'Absolutely great device with staffs always at your service. No one\'s gonna regret using this product. Loved it ❤️'
        },
        {
            name: 'Mr. Amrit Bhusal',
            role: 'Bhusal Group',
            image: '/customer-3.jpg',
            text: 'Great GPS tracker from Trackon. It\'s accurate. The features are also great and work without any problem.'
        },
        {
            name: 'Damodar Bidari',
            role: 'Purwanchal Bakery',
            image: '/customer-4.jpg',
            text: 'I\'ve been using this GPS tracking system for about a year and I am very satisfied with this solution.'
        }
    ]

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>Let's Hear From Our Clients</h2>
                    <p>If you're still confused about taking our services, check out what our clients say about us.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-image">
                                <img src={testimonial.image} alt={testimonial.name} />
                            </div>
                            <div className="testimonial-content">
                                <h4>{testimonial.name}</h4>
                                <span className="testimonial-role">{testimonial.role}</span>
                                <p>"{testimonial.text}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials