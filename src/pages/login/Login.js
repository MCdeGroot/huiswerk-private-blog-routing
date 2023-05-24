import React from 'react';
import {useNavigate} from "react-router-dom";

function Login({authentication, toggleAuthentication}) {
    //door een use navigate te importeren kunnen we een methode creeeren die we aan een button kunnne toeveogen om gebruikers door te sturen naar het gewenste pad.
    //eenmalig aanroepen
    const navigate = useNavigate();

    //schrijven een login functie die we later gaan gebruiken in een onClick
    function logIn() {
        toggleAuthentication(!authentication);
        navigate('/');
    }

    //nu gaan we een functie creëren die de

    return (
        <main>
            <h1>Login pagina</h1>
            <p>druk op de knop om je in te loggen!</p>
            <button type="button" onClick={logIn}>Inloggen</button>
        </main>
    );
};

export default Login;