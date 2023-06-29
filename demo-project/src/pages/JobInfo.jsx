export default function jobInfo(props) {
    return (
        <div>
            <div>
                <img src={props.pfp}/>
            </div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <p>{props.company_name}</p>
                    <p>{props.time}</p>
                    <p>{props.difficulty_level}</p>
                    <p>{props.team}</p>
                    <p>{props.location}</p>
                </div>     
            </div>
        </div>
    )
}