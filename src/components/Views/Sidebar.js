import React from 'react'
import { Link } from "react-router-dom";
import '../style/home.css'

function Sidebar() {
    const navList = [
        { name: "Dashboard", path: "/", imgurl: "images/dashboard.png" },
        { name: "Health Book", path: "/HealthBook", imgurl: "images/healthbook.png" },
        { name: "Doctors", path: "/Doctor", imgurl: "images/doctor.png" },
        { name: "Elder Care Plan", path: "/ElderCarePlan", imgurl: "images/elder_care.png" },
        { name: "User", path: "/User", imgurl: "images/user.png" },
        { name: "Medicine", path: "/Medicine", imgurl: "images/medicine.png" },
        { name: "Appointments", path: "/Appointments", imgurl: "images/appointment.png" },
        { name: "Subscriber", path: "/Subscriber", imgurl: "images/subscriber.png" },
        { name: "Blog", path: "/Blog", imgurl: "images/blog.png" },
        { name: "AppImage", path: "/AppImage", imgurl: "images/subscriber.png" },
      ];

  return (
    <div >
          <nav className="s-sidebar__nav">
            
            <ul>
            <div style={{paddingLeft:'20px'}}>Main</div>
            {navList.map((item, index) => {
                return (
                   <li  key={index}>
                   <Link to={item.path} className="s-sidebar__nav-link" href="#0">
                     <i><img src={item.imgurl} alt="logo" /></i><em>{item.name}</em>
                   </Link>
                 </li>
                )
              })
              }
            </ul>
          </nav>
        </div>
  )
}

export default Sidebar