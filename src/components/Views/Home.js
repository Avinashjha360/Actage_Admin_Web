import React from 'react'
import '../style/home.css'
import Topnav from './Topnav';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'


function Home() {
  return (
    <>
      <Topnav />
      {/* <!-- Sidebar --> */}
      <div className="s-layout">
        <Sidebar />
        <div style={{ width: '100vw' }}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Home