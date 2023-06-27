import {Outlet, NavLink} from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <div className="navbar">
                <NavLink to="/" id="logo-font">Best Writing</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/freelance-jobs">Freelance</NavLink>
                <NavLink to="/membership">Membership</NavLink>
                <NavLink to="/newsletter">Newsletter</NavLink>
                <NavLink to="/writers">Writers</NavLink>
            </div>
            <Outlet />
        </div>
    )
}