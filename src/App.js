
import './App.css';
import Home from './Component/Component1/home';
import Navbar from './Component/Component1/navbar';
import Navbar2 from './Component/Component1/navbar2';
import Card from './Component/Component2/Card';
import Contact from './Component/Component3/contat';
import Sidenavbar from './Component/Component1/navbar3';
import './App.css'
import { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
function App() {
  var[showSideBar,setShowSideBar] =useState(true)
  return (
    <div className='container' style={{backgroundColor:"white",padding:"0"}}>
    <div className='Main'>   
      <Navbar/> 
      <div style={{justifyContent:"space-between"}}>
          
        <img src="https://woxro.com/public/assets/png/woxrologo.png" alt="logo" 
        height="55px" style={{paddingLeft:"15px" ,paddingTop:"5px"}} />
  <span className='bars' >
        <Icon name='bars' style={{paddingTop:"1rem", float:'right'}} onClick={()=>{setShowSideBar(true)}}  size='large' color='black'></Icon>
        </span>
      
      </div>
      <Sidenavbar show={showSideBar} close={()=>{setShowSideBar(false)}}/>
      <Navbar2/>
      <Home/>
      <Card/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
