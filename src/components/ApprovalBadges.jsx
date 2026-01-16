import React from 'react'
import './ApprovalBadges.css'

const ApprovalBadges = () => {
    return (
        <section className="approval-badges">
            <div className="container">
                <h2>Approved By</h2>
                <p>All our GPS tracking devices are Type Approved by the Nepal Telecommunications Authority (NTA) and Licensed by the Ministry of Communication and Information Technology, Government of Nepal.</p>

                <div className="badges">
                    <div className="badge">
                        <img src="/nta-logo.png" alt="NTA Nepal" />
                        <span>Nepal Telecommunications Authority</span>
                    </div>
                    <div className="badge">
                        <img src="/government-nepal-logo.png" alt="Government of Nepal" />
                        <span>Government of Nepal</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApprovalBadges