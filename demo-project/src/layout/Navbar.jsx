import {Outlet, NavLink} from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <div className="navbar">
                <NavLink to="/" id="logo-font">Best Writing</NavLink>
                <NavLink to="/jobs"
                 className={({isActive, isPending})=> {
                    return {color: isActive ? "darkgreen" : "grey",
                    backgroundColor: isActive ? "c7f9cb": ""
                    }    
                 }}
                >Jobs</NavLink>
                <NavLink to="/freelance-jobs">Freelance</NavLink>
                <NavLink to="/membership">Membership</NavLink>
                <NavLink to="/newsletter">Newsletter</NavLink>
                <NavLink to="/writers">Writers</NavLink>
                <NavLink className="signup-btn" to="/signup"><button>Sign Up</button></NavLink>
            </div>
            <Outlet />
        </div>
    )
}