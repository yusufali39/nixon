import React from "react"
import "./About.css"
export default function About (){
    return (
        <>
        <div className="Aboutsection">
		<h1 className="Aboutheading">About - From the Developer</h1><hr />
        <h2>How this project came to be</h2>
        <p>This is a project to learn Web development and Node.js is a relevent topic to me. I learnt a lot about Fronted and General Web Development from this project.</p><br /><br />
        <div class="vid-class">
        <video className="myVideo" autoPlay>
        <source src="/Videos/programming.mp4" type="video/mp4" />
        </video>
    </div>
        <p>I will be honest, a lot of this material/content was collected from various books, online websites and my own notes.
        </p><br />
        <p>Most of the material is verified by me from multiple sources, however as always, the developer won't take any responsibility if you fail your exam or your server crashed.</p>
        <br />
        <h2>Credits</h2>
        <p>Definitely goes to me, why would you even think that i give to anyone?, yeah but i will name a few websites that helped me content for this website i.e w3 school.</p>
        <h2>Screenshot</h2>
        <img className="img-class" src="/screenshot.png" alt="" /><br /><br />
	</div>
        </>
    )
}