import React from 'react'
import {menuList} from '../helpers/menuList'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'
function Menu() {
  return (
    <div className='menu'>
        <h1 className="menuTitle">Our menu</h1>
        <div className="menuList">
                {menuList.map((menuItem, key)=>{
                    return (
                        <MenuItem 
                        key={key} 
                        image={menuItem.image}
                         name={menuItem.name} 
                         price={menuItem.price} 
                         />
                    );
                })}
            </div>

    </div>
  )
}

export default Menu