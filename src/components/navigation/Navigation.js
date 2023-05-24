import React from 'react';
import './Navigation.css'
import {NavLink, useNavigate} from 'react-router-dom';

// we geven callback functies mee als parameters
function Navigation({authentication, toggleAuthentication}) {
    const navigate = useNavigate();

    function signOut() {
        toggleAuthentication(false);
        navigate('/')
    }

    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        {authentication === true ? <>
                            <li>
                                <NavLink to="/blogposts">Overzicht Blogposts</NavLink>
                            </li>
                            <li>
                                <button type="button" onClick={signOut}>
                                    Uitloggen
                                </button>
                            </li>
                            </>
                            :
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>}
                    </li>
                </ul>
            </div>
        </nav>
    )
        ;
}

export default Navigation;