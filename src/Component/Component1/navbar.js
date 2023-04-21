import React from "react"
import './navbar.css'
import { Icon } from "semantic-ui-react"
function Navbar(){
    return(
        <div className="nav1" >
        <nav className="navbar navbar-dark-sm navbar-expand-lg " style={{backgroundColor:"black"}}  > 
        <ul class="navbar-nav mr-auto w-100 ">
            <li className="nav-item">
                    <a className="nav-link" href="#"><span style={{color:"white",fontWeight:"bolder"}}>Now Hiring : </span >  <span style={{color:"white",fontWeight:400}}>Looking for a job in Full Stack Development?</span></a>
            </li>
            </ul>
            <ul class="navbar-nav  mr-auto w-100 " style={{paddingLeft:"16rem"}}>
            <li className="nav-item" >
                    <a className="nav-link" href="#"><span style={{color:"white",fontWeight:"bold"}}><Icon name='phone' size='' />+91 487 2080 212 
                    </span >  <span style={{color:"white",fontWeight:""}}><Icon name='map marker alternate' size='' /> Leshore Business Park, Thrissur</span></a>
            </li>
        
        </ul>
        </nav>
        </div>
       
        
    )
}
export default Navbar