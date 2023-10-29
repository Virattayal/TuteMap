import React from 'react';
import image from "../mycomponents/pic.jpg";
import Navbar from './navbar';
import { AiFillStar } from "react-icons/ai";

export default function Container() {
    const projectList = [
        {
          title: "My Notes App",
          description: "A Notes Keeping android app with user login, and firebase integration.",
          url: "https://github.com/sahilsharma17/MyNotesApp",
        },
        {
          title: "To Do App",
          description: "A ToDo task Keeping app using flutter.",
          url: "https://github.com/sahilsharma17/todo_app",
        },
        {
          title: "My Portfolio Website",
          description:
            "Created personal portfolio website using HTML/CSS and deployed to GitHub pages. Includes my experience and abilities.",
          url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
        },
        {
          title: "Thyroid detection using ML",
          description:
            "Thyroid detection using ML algorithms, and prediction of the results using patient's data.",
          url: "https://github.com/sahilsharma17/thyroid-detection",
        },
        {
          title: "Thyroid detection using ML",
          description:
            "Thyroid detection using ML algorithms, and prediction of the results using patient's data.",
          url: "https://github.com/sahilsharma17/thyroid-detection",
        },
        {
          title: "Thyroid detection using ML",
          description:
            "Thyroid detection using ML algorithms, and prediction of the results using patient's data.",
          url: "https://github.com/sahilsharma17/thyroid-detection",
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
      <div class="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      <input class="form-control" type="search" placeholder="     Search" aria-label="Search"style={{borderRadius:"20px",height:"40px",width:"830px",marginTop:"10px",marginBottom:"20px"}}/>
      <br></br>
        {projectList.map((project) => (
          <div class="box flex-row"><img class="card-img-left example-card-img-responsive" alt='Institute' src={image} style={{width:"150px",height:"150px"}}/>
          <div class="card-body"style={{textAlign:"left"}}>
            <h4 class="card-title">Institute Name</h4>
            <p class="small">nnfdkjfkjnfjdfkjekjfnkdsjnfkjkjbbkjb
            rgfgdfgfhgchgvhhgvhgvhghghfdfd
            gfdhgfdghfgh</p>
            <h4 class="small">4.5 <AiFillStar class="star"/></h4>
            <button style={{width:"120px",backgroundColor:"rgb(117, 183, 238)",borderRadius:"20px",borderColor:"rgb(117, 183, 238)"}}>More</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section>
  </>
  )
}