import React from 'react';
import Navbar from './navbar';
import { FiEdit } from "react-icons/fi";
export default function Profile() {

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
      <div>
        <h1 className='profile'>Profile<button className='edit'><FiEdit/></button></h1>
        <br />
      <div>
        <h6 class="detail">Name : ABC</h6>
        <br />
        <h6 class="detail">Address : ABC</h6>
        <br />
        <h6 class="detail">Phone No : ABC</h6>
        <br />
        <h6 class="detail">more details : ABC</h6>
      </div>

      </div>
      </div>

    </div>
  </section>
  </>
  )
}