import React from 'react';
import { Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <>
     <div class="wrapper ">
      <div class="sidebar" data-color="purple" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
   
      <div class="logo"><a href="http://www.creative-tim.com" class="simple-text logo-normal">
          Creative Tim
        </a></div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item active  ">
            <a class="nav-link" href="./Sidebar">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="./EditProfile">
              <i class="material-icons">person</i>
              <p>User Profile</p>
              
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="./TablesList">
              <i class="material-icons">content_paste</i>
              <p>Table List</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="./Tipography">
              <i class="material-icons">library_books</i>
              <p>Typography</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="./Icons">
              <i class="material-icons">bubble_chart</i>
              <p>Icons</p>
            </a>
          </li>
          {/* <li class="nav-item ">
            <a class="nav-link" href="./map.html">
              <i class="material-icons">location_ons</i>
              <p>Maps</p>
            </a>
          </li> */}
          <li class="nav-item ">
            <a class="nav-link" href="./notifications">
              <i class="material-icons">notifications</i>
              <p>Notifications</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
        </>
    );
}
 
export default Sidebar;