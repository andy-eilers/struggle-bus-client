import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    const riderId = localStorage.getItem("userId")
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/posts">Bus Stop</Link>    
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to={`/riders/${riderId}`}>Rider Profile</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/busses">Busses</Link>
            </li>
            {
                (localStorage.getItem("sb_token") != null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("sb_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-Item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }
        </ul>
    )
}
