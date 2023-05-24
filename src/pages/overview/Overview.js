import React from 'react';
import posts from '../../data/posts.json';
import {Link} from "react-router-dom";

function Overview() {
    return (
        <main>
            {/*// uit de datamap kunnen we het aantal blogposts halen*/}
            <h1>Blog overzichtspagina</h1>
            <h3>Aantal blogposts: {posts.length}</h3>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}><Link to={`/blogposts/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        </main>
    );
};

export default Overview;