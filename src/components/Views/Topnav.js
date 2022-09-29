import React from 'react';
import '../style/topnav.css';
function Topnav() {
  return (
    <>
      <header>
        <div>
          <img src="images/logo.png" alt="logo" />
        </div>
        <div>
        <form className="example" >
          <input type="text" placeholder="Search.." name="search2" />
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
        </div>

        <div>
        </div>
      </header>
    </>

  )
}

export default Topnav