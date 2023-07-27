import React from 'react'
import leftpizza from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'
function Contact() {
  return (
    <div className='contact'>
        <div className="leftSide" style={{backgroundImage: `url(${leftpizza})`}}></div>
        <div className="rightSide">

         <h1>Contact us</h1>
         <form method='post' id="contact-form">
             <label htmlFor="name" >Full name</label>
             <input type="text" placeholder='Enter full name' name='name' />

             <label htmlFor="email" >E-mail</label>
             <input type="email" placeholder='Enter Email...' name='email' />

             <label htmlFor="Phone" >Phone no.</label>
             <input type="text" placeholder='Enter your phone number' name='name' />

             <label htmlFor="Phone" >Type message</label>

              <textarea name="message"  rows="6" placeholder='Enter message...' required></textarea>
    <button type='submit'>Send message</button>
            
         </form>
        </div>
    </div>
  )
}

export default Contact


