import React from 'react';
import Navbar from './navbar';
import image from "../mycomponents/pic.jpg";
import { AiFillStar } from "react-icons/ai";

export default function Favorite() {
    const favoriteList = [
        {
          img:{image},
          location:"gurgaon",
          rating:"4.5",
        },
        {
            img:{image},
            location:"gurgaon",
            rating:"4.5",
        },
        {
            img:{image},
            location:"gurgaon",
            rating:"4.5",
        },
        {
            img:{image},
            location:"gurgaon",
            rating:"4.5",
        },
        {
            img:{image},
            location:"gurgaon",
            rating:"4.5",
        },
        {
            img:{image},
            location:"gurgaon",
            rating:"4.5",
        },
      ];
      
  return (
  <>
  <h1 style={{marginTop:"30px",marginLeft:"40px"}}>TutMap</h1>
    <section className="padding" id="projects">
    <div style={{ display: "flex", flexDirection: "row", paddingTop: "0rem" }}>
      <div style={{ maxWidth: "40%", alignSelf: "left" }}>
      <Navbar/>
      </div>
      <div class="container1">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      <button className='button1'>Teachers</button>
      <button className='button2'>Institutes</button>
      <br/>
        {favoriteList.map((project) => (
          <div class="card" style={{width: "18rem"}}>
          <img src={image} class="card-img-top" alt="..."/>
          <div class="card-body">
            <p class="card-text">{project.location}</p>
            <h4 class="small">{project.rating}<AiFillStar class="star"/></h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section>
  </>
  )
}