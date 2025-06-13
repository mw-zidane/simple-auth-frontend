// import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = (props: { name: string, setName: (name: string) => void }) => {
    const logout = async () => {
        await fetch('https://localhost:7237/api/Auth/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        props.setName('');

    };

    var menu;

    if (props.name) {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/login" onClick={logout}>Logout</Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        )
    }

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Home</Link>
                    <div>
                        {menu}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;