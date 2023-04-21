import './Card.css'
import { Icon } from "semantic-ui-react"
function Card(){
    return(
        <div>
      <div className="container" >
            <div className="heading">
            
            <strong><p style={{letterSpacing:"0.20rem",color:"#616161"}}>SERVICES WE DELIVER</p></strong>
            <br></br>
           
            <strong><h2 style={{fontSize:"3rem",color:"black",margin:"auto",fontWeight:'bold',display:"inline"}}>Preparing for your success, we provide truly prominent IT solutions.</h2></strong><br/>
          </div>
          <br></br>


        <div className="row" >
          <div className="col-md-4 col-12" style={{padding:"0.5rem"}}>
            <div className="card" style={{ cursor: 'pointer',border:"none",backgroundColor:"#e7f0f7",backgroundBlendMode: "multiply"}}>
              <div className="card-body">
              <img src="https://woxro.com/public/assets/png/services/webdesigning.png"/>
                <h4 className="card-title" style={{fontWeight:"900",fontSize:"1.27rem"}}>Web Designing</h4>
                <p className="card-text" style={{fontSize:"12px",fontWeight:"400"}}>We create impressive interfaces.
                 Usability + user experience are created based 
                  on a study of preferences and user behavior, using the
                   latest web design trends, 
                  our experience, and achievements.</p>
              </div>
            </div>
          </div>
         
          <div className="col-md-4 col-12" style={{padding:"0.5rem"}}>
            <div className="card" style={{ cursor: 'pointer',border:"none",backgroundColor:"#f6f5f3",backgroundBlendMode: "multiply"}}>
              <div className="card-body">
              <img src="https://woxro.com/public/assets/png/services/webapplication.png"/>
                <h4 className="card-title" style={{fontWeight:"900",fontSize:"1.27rem"}}>Web Application</h4>
                <p className="card-text" style={{fontSize:"12px",fontWeight:"400"}}>We have completed projects in full-cycle web applications including CRM, HRM, and 
                  project management solutions. Look no further if you are in search of a professional 
                  partner who can develop stunning web applications.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12" style={{padding:"0.65rem"}}>
            <div className="card" style={{ cursor: 'pointer',border:"none",backgroundColor:"#f6f5f3",backgroundBlendMode: "multiply"}}>
              <div className="card-body">
              <img src="https://woxro.com/public/assets/png/services/mobileappdevelopment.png"/>
                <h4 className="card-title" style={{fontWeight:"900",fontSize:"1.27rem"}}>Mobile App Development</h4>
                <p className="card-text" style={{fontSize:"12px",fontWeight:"400"}}>We develop high-quality and effective applications for your business. Our expertise and 
                  knowledge help us create reliable mobile applications for iOS and Android and cross-platform
                  solutions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12" style={{padding:"0.5rem"}}>
            <div className="card" style={{ cursor: 'pointer',border:"none",backgroundColor:"#fcf0e4",backgroundBlendMode: "multiply"}}>
              <div className="card-body">
              <img src="https://woxro.com/public/assets/png/services/ecommercedevelopment.png"/>
                <h4 className="card-title" style={{fontWeight:"900",fontSize:"1.27rem"}}>Ecommerce Development</h4>
                <p className="card-text" style={{fontSize:"12px",fontWeight:"400"}}>For some of you, our involvement as an eCommerce development and consulting partner will mean 
                  a powerful business launch with the right technology stack. For others – a possibility to give 
                  their business a fresh start.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12" style={{padding:"0.5rem"}}>
            <div className="card" style={{ cursor: 'pointer',border:"none",backgroundColor:"#f5f6f8",backgroundBlendMode: "multiply"}}>
              <div className="card-body">
              <img src="https://woxro.com/public/assets/png/services/digitalmarketing.png"/>
                <h4 className="card-title" style={{fontWeight:"900",fontSize:"1.27rem"}}>Digital Marketing</h4>
                <p className="card-text" style={{fontSize:"12px",fontWeight:"400"}}>We bring together expertise in digital marketing and sustainability to design and implement ideas 
                  in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your 
                  online visibility.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12" style={{padding:"0.5rem"}}>
            <div className="card" style={{ cursor: 'pointer',border:"none",backgroundColor:"#effbfb",backgroundBlendMode: "multiply"}}>
              <div className="card-body">
              <img src="https://woxro.com/public/assets/png/services/graphic.png" />
                <h4 className="card-title" style={{fontWeight:"900",fontSize:"1.27rem"}}>Graphic Designing</h4>
                <p className="card-text" style={{fontSize:"12px",fontWeight:"400"}}>For some of you, our involvement as an eCommerce development and consulting partner will mean a 
                  powerful business launch with the right technology stack. For others – a possibility to give their
                  business a fresh start.</p>
              </div>
            </div>
          </div>
        </div>  
        
      </div>
    </div>
    )
}
export default Card