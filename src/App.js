import React, {useState} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import BlogPost from './pages/blogpost/BlogPost';
import Overview from './pages/overview/Overview';
import Navigation from './components/navigation/Navigation';


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    console.log(isAuthenticated);

    return (
        <>
            {/*Hier definieer je alle pagina's en zet je de routing aan. De navigation component wordt op deze manier overal toegevoegd. We meoten alleen nog voorwaarden stellen in de navigation component*/}
            {/*hier geven we properties mee aan de Nav component*/}
            {/*hier gebruiken we de waarden uit de State voor*/}
            <Navigation authentication={isAuthenticated} toggleAuthentication={toggleIsAuthenticated}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login authentication={isAuthenticated} toggleAuthentication={toggleIsAuthenticated}/>}/>
                <Route path="/blogposts" element={isAuthenticated ? <Overview/> : <Navigate to={"/login"}/>}/>
                <Route path="/blogposts/:blogId" element={isAuthenticated ? <BlogPost/> : <Navigate to={"/login"}/>}/>
            </Routes>
        </>
    );
}

export default App;