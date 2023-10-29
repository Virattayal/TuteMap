import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { BiHomeAlt } from "react-icons/bi";
import { PiChartBarHorizontalDuotone } from "react-icons/pi";
import { BiBell } from "react-icons/bi";
import { HiOutlineChartPie } from "react-icons/hi";
import { MdOutlineInventory2 } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
  return (
  <>
      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{width:"200px",height:"550px",marginTop:"5px"}}>
        <Link class="nav-link" id="v-pills-home-tab" data-toggle="pill" to="/" role="tab" aria-controls="v-pills-home" aria-selected="true" style={{marginTop:"20px"}}><BiHomeAlt/>  Dashboard</Link>
        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><PiChartBarHorizontalDuotone/> Notifications</a>
        <Link class="nav-link" id="v-pills-messages-tab" data-toggle="pill" to="/favorite" role="tab" aria-controls="v-pills-messages" aria-selected="false"><BiBell/> Favorites</Link>
        <Link class="nav-link" id="v-pills-settings-tab" data-toggle="pill" to="/profile" role="tab" aria-controls="v-pills-settings" aria-selected="false"><HiOutlineChartPie/> Profile</Link>
        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><MdOutlineInventory2/> Settings</a>
        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><MdOutlineInventory2/> Help</a>
        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" style={{marginTop:"100px"}}><FiLogOut/> Logout</a>
</div>
  </>
  )
}