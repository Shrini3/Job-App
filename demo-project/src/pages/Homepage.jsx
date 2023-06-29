import {Link} from "react-router-dom"
import { useState } from "react"
import jobInfo from "./JobInfo"

export default function Homepage() {
    const [jobData, setJoBData] = useState(
        fetch("./api/job")
    )
    function parse_job() {
        return (jobData.map(x => {
            <jobInfo 
                pfp={x.pfp}
                title={x.title}
                company_name={x.company_name}
                time={x.time}
                difficulty_level={x.difficulty_level}
                team={x.team}
                location={x.location}
            />
        }))
    }

    return (
       <div>
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
            <section>
                <section className="homepage-jobs-info">
                    <p>BEST WRITING JOBS</p>
                    <h2>Explore thousands of writing jobs</h2>
                    <p>We source writing jobs from job portals, newsletters, social media, 
                        communities and selected partners. With personalized filters you can easily find the jobs you care about.</p>
                    <div className="homepage-jobs-btn-section">
                        <button>Browse writing jobs</button>
                        <button>Hiring? Post a job</button>
                    </div>
                </section>
                {parse_job}
            </section>
       </div>
    )
}