import React from 'react';
import "./header.css";
import {Link} from 'react-router-dom';
function header(){
    return(
        <div>
            <header class="site-header">  
     <div class="site-identity hea1">  
      <h1><a href="#">Sales Tracker</a></h1>  
     </div>   
     <nav class="site-navigation">  
      <ul class="nav">  
       <li><Link to='/test'>Test</Link></li>   
       <li><a href="/#">About US</a></li>   
       <li><a href="/#">Blog</a></li>  
       <li><a href="/#">Contact</a></li>   
      </ul>  
     </nav>  
    </header>
        
        </div>
    )
}
export default header;