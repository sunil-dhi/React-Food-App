import React from 'react'
import {Link} from 'react-router-dom'
import bannerimage from '../assets/pizza.jpeg'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${bannerimage})`}} >
      <div className="headerContainer"  >
        <h1>Sunil's pizza</h1>
        <p> PIZZA TO TASTE AND FIT</p>
        <Link to="/menu">
        <button >order now!</button>
        </Link>
        </div>
    </div>
  );
}

export default Home;