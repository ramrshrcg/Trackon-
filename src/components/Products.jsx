import React from 'react'
import './Products.css'

const Products = () => {
    const products = [
        {
            name: 'Trackon Micro',
            image: '/gps-micro.webp',
            originalPrice: 'Rs. 8000.00',
            salePrice: 'Rs. 6800.00'
        },
        {
            name: 'Trackon Micro Plus',
            image: '/gps-micro-plus.webp',
            originalPrice: 'Rs. 9000.00',
            salePrice: 'Rs. 7650.00'
        }
    ]

    return (
        <section className="products" id="products">
            <div className="container">
                <div className="section-header">
                    <h2>Shop Now and Order for Installation</h2>
                    <p>Trackon GPS devices and services have very flexible and competitive pricing from where you can easily select your best option according to your needs.</p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div key={index} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <div className="price">
                                    <span className="original-price">{product.originalPrice}</span>
                                    <span className="sale-price">{product.salePrice}</span>
                                </div>
                                <button className="buy-now-btn">Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products