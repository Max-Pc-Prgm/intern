import React ,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import {Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import {SideBarData} from './SideBarData';
import './SideBar.css'
import {IconContext} from 'react-icons';



function SideBar() {
    const [SideBar,setSideBar]=useState(false);
    const showSideBar=()=>{
        setSideBar(!SideBar)
    }
  return (
    <div>
        <IconContext.Provider value={{color:'#fff'}} >
        <div className='navbar'>
            <Link to="#" className='menu-bars'>
                <FaIcons.FaBars onClick={showSideBar}/>
            </Link>
        </div>
        <nav className={SideBar ? 'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSideBar}>
                <li>

                </li>
                <li className="navbar-toogle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                <li>
                    
                </li>
                {SideBarData.map((item,index)=>{
                    return (
                        <li key={index} className={item.cName} >
                        <Link to={item.path} >
                            {item.icon}
                            <span>{item.title}</span>                            
                       </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>

    </div>
  
)}

export default SideBar; 