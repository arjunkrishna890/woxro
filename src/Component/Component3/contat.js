import { Button,Icon } from 'semantic-ui-react';
import './contat.css';


function Contact(){
    return(
<div className='outer'>
    <div className='main' >
                <div className='item' >
                <h2>
                    We offer all kinds of IT services that ensure your success
                </h2>
                </div>
                <div className="phone">
                    <button className='button'><i className="fa fa-comment"></i>Contact us</button>
                    <button className='button'><i className="fa fa-comment"></i>Let's Talk</button>          
                </div>
        </div>
</div>
    )
}
export default Contact