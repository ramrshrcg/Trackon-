import React from 'react'
import './Clients.css'

const Clients = () => {
    const clients = [
        { name: 'Aangan Sweets', logo: '/client-aangan.jpg' },
        { name: 'Bhusal Cable', logo: '/client-bhusal-cable.png' },
        { name: 'Bhusal Group', logo: '/client-bhusal-group.png' },
        { name: 'Bishal Cement', logo: '/client-bishal-cement.png' },
        { name: 'Maruti Cement', logo: '/client-maruti-cement.png' },
        { name: 'MAW', logo: '/client-maw.png' },
        { name: 'MRF Tyres', logo: '/client-mrf.png' },
        { name: 'Riddhi Siddhi Cement', logo: '/client-riddhi-siddhi.jpeg' },
        { name: 'PharmaLife', logo: '/client-pharmalife.webp' },
        { name: 'ClassicTech', logo: '/client-classictech.jpg' },
        { name: 'WorldLink', logo: '/client-worldlink.png' },
        { name: 'Agni Group', logo: '/client-agni-group.png' }
    ]

    return (
        <section className="clients">
            <div className="container">
                <div className="section-header">
                    <h2>Our Top Corporate B2B Clients</h2>
                    <p>We have served many individuals and companies. To name a few, these organizations are some of our key clients.</p>
                </div>

                <div className="clients-grid">
                    {clients.map((client, index) => (
                        <div key={index} className="client-logo">
                            <img src={client.logo} alt={client.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clients