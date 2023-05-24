import React from 'react';
import posts from '../../data/posts.json';
import {Link, useParams} from "react-router-dom";

function BlogPost() {



    // get the blogId uit de URL.
    const {blogId} = useParams();
    const post = posts.find((post) => {
        return post.id === blogId;
    });

    console.log(post);

    return (
        <main>
            <article>
                <h1>{post.title}</h1>
                <h3>{post.date}</h3>
                <p>{post.content}</p>
            </article>
            <article>
                <p><Link to="/">Terug naar Home</Link></p>
            </article>
        </main>
    );
};

export default BlogPost;