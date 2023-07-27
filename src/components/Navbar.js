import React, {useState} from "react";
import logo from '../assets/pizzaLogo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {
 
    const [openlinks, setOpenLinks]=useState(false);

    const toggleNavbar=()=>{
        setOpenLinks(!openlinks);
    };

  return(
   <div className="navbar">
       <div className="leftSide" id={openlinks? "open" : "close"}>
           <img src={logo} alt="img" />
           <div className="hiddenLinks">
           <Link to="/">Home</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact us</Link>
               </div>
        </div>
       <div className="rightSide">
           <Link to="/">Home</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact us</Link>
           <button onClick={toggleNavbar}>
           <ReorderIcon />
           </button>
           </div>

   </div>
   );
}

export default Navbar;
