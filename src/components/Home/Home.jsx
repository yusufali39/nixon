import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
        <div className="content-with-image">
        <div className="content">
            <h1>Deep Dive Into Modern Backend Development</h1> 
            <h2 className="main-text">hello world!! <span className="text"></span></h2>
            <Link className="button" to="/course">Explore courses</Link>
            <p>Alright, let's start learning Node.js, Express, and MongoDB together! This course will introduce you to modern JavaScript-based web development. First, we'll begin with Node.js, so let's first take an overview. So, let's go!</p>
        </div>
        <img className="content-image" src="/homeimage.svg" alt="" />
        </div>

        <div className="overview">
            <h1>Node.js - Ryan Dahl in 2009 </h1>
            <p>Node.js is a powerful platform for developing server-side JavaScript. Node.js is a platform built on Google Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. </p> 
            <h1>Express.js - IBM, StrongLoop and others in 2010 </h1> 
            <p>Express is a web application framework for Node.js. It provides various features that make web application development fast and easy which otherwise takes more time using only Node.js. Express is based on the Node.js middleware module called connect which turn uses http module. So, any middleware which is based on connect will also work with Express.js.</p>

            <h1>ReactJS - Jordan Walke in 2013 </h1> 
            <p>ReactJS is JavaScript library used in web development to build interactive elements on websites. But if you're not familiar with JavaScript or JavaScript libraries, that's not a helpful defination. So let's take a step back and deal with those terms first in ReactJS course.</p>

            <h1>MongoDB - Dwight, Eliot Horowitz and Kevin Ryan in 2007 </h1> 
            <p>MongoDB is an open-source document-oriented database that is designed to store a large scale of data and also allows you to work with that data very efficiently. It is categorized under the NoSQL(Not only SQL) database because the storage and retrievel of data in the MongoDB are not in the form of tables. </p>
        </div>
        </>
    );
}
