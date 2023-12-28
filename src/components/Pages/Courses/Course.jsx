import React from "react";
import "./Course.css"
import { Link } from "react-router-dom";
export default function Course (){
    return (
        <>
        <div className="section">
        <div className="img-class center-button">
        <h1 className="nixonhome">nixon - Home</h1>
            <hr />
        <video className="myVideo" autoPlay>
        <source src="/Videos/myvideo.mp4" type="video/mp4" />
        </video>
        <Link className="button" to="/Node">Nodejs</Link>
        <a href="#" class="button">Expressjs</a>
        <a href="#" class="button">APIs</a>
        <a href="#" class="button">EJS</a>
        </div>

        <h2>Dive in deep with our user-friendly and intuitive learning platform nixon</h2>
        <p>Explore the world of Backend development, Node.js, Express, MongoDB, and React in an uncomplicated, straightforward manner. Unleash your potential, one module at a time.
        </p>
        <p>Nixon is on a mission to simplify and democratize backend development. I passionate about making it easier for individuals to learn backend development. My unique approach break down complex concepts into easy-to-understand lessons so you can start building and growing your skills in no time.</p>
        </div>
        </>
    )
}