export default function jobInfo(props) {
    return (
        <div className="jobInfo-card">
            <div className="jobInfo-img">
                <img src={props.pfp}/>
            </div>
            <div>
                <h3>{props.title}</h3>
                <div className="jobInfo-details">
                    <p><b>{props.company_name}</b></p>
                    <p>{props.time}</p>
                    <p>{props.difficulty_level}</p>
                    <p>{props.team}</p>
                    <p>{props.location}</p>
                </div>     
            </div>
            {onMouseOver=
            <div>
                <button>Apply</button>
                <button>View Job</button>
            </div>
            }
        </div>
    )
}