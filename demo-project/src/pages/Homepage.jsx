import {Link} from "react-router-dom"

export default function Homepage() {
    return (
       <div className="homepage-intro">
            <div className="homepage-intro-1">
                <div className="homepage-intro-1-inner">
                    <h2>Find the Best Writing Job</h2>
                    <p>We hand-pick paid writing opportunities, including remote,
                            freelance, contract, part-time, and full-time.</p>
                    <div className="homepage-1-btn-section">
                        <button><Link to="/newsletter">Subscribe to Job Newsletter</Link></button>
                        <p>Get the best writing jobs Weekly. Free</p>
                    </div>
                </div>
            </div> 
            <div className="homepage-intro-2">
                <img src="/home-women.jpg" />
            </div>
       </div>
    )
}