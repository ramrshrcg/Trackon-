import React from 'react'
import './ExpertsReview.css'

const ExpertsReview = () => {
    const videos = [
        {
            title: 'Trackon GPS App Features | Main Highlights | Live Tracking | Geofences | Speed Alerts | And More ...',
            thumbnail: '/video-thumbnail-1.webp'
        },
        {
            title: 'Installation and Activation Video - Trackon Micro for Bikes (Waterproof)',
            thumbnail: '/video-thumbnail-2.webp'
        },
        {
            title: 'Installation and Activation Video - Trackon Micro Plus for Bikes (Waterproof)',
            thumbnail: '/video-thumbnail-3.webp'
        }
    ]

    return (
        <section className="experts-review">
            <div className="container">
                <div className="section-header">
                    <h2>Expert's Review</h2>
                </div>

                <div className="videos-grid">
                    {videos.map((video, index) => (
                        <div key={index} className="video-card">
                            <div className="video-thumbnail">
                                <img src={video.thumbnail} alt={video.title} />
                                <div className="play-button">▶</div>
                            </div>
                            <h4>{video.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExpertsReview