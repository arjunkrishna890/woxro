import { Icon } from 'semantic-ui-react'
import './navbar3.css'

function Sidenavbar(props){
    var style = {}
    if(!props.show){
        style = {
            display: 'none'
        }
    }
    return(
        <div className='sidebar d-md-none' style={style}>
            <br></br>
            <ul style={{listStyleType: "none" ,padding:"2rem",fontSize:"1.8rem",TextColor:""}}>
                <li >
                   <Icon name='times' inverted onClick={props.close}></Icon>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "#757575", fontWeight: "400" }}>Home</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "#757575", fontWeight: "420" }}>About us</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "#757575", fontWeight: "400" }}>Services</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "#757575", fontWeight: "400" }}>Technology</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "#757575", fontWeight: "400" }}>Career</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "#757575", fontWeight: "400" }}>Blogs</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "#757575", fontWeight: "400" }}>Our works</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "#757575", fontWeight: "400" }}>Contact us</span></a>
              </li>
                
            </ul>
        </div>
      
    )
}
export default Sidenavbar