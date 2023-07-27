import React from 'react'
import '../styles/About.css'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
function About() {
  return (
    <div className='about'>
        <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}>  </div>

        <div className="aboutBottom"> 
        <h1>About us</h1>
        <p>Lorem ipsum dolo sit amet consectetur, adipisicing elit. Ut qui culpa accusantium error repellat in maxime vero nobis voluptatem molestias? Quasi at? Optio facere repudiandae ipsum quod alias quos deserunt expedita voluptatibus ipsa aut sequi at corrupti molestiae architecto voluptates quasi cum dolorum, sapiente unde voluptas natus? Delectus quibusdam veniam, cupiditate velit nihil tempora nemo laborum.</p>
        </div>
    </div>
  )
}

export default About