import {Link} from 'react-router-dom';
import './ThankyouSec.css';


const ThankyouSec = ({ bgImage ,image, title, subtitle, buttonText, linkTo}) => {
    return (
            <div className="lm_whitespacing_x">
            <div className="thankyou-images" style={{ "--bg-image": `url(${bgImage})` }} >
                <div className="squr-image"></div>
                <div className ="thankyou-content">
                <img src={image} alt="Thank You Icon" className="thankyou-icon" />
                <h2> {title}</h2>
                <p>{subtitle}</p>
                <Link to ={linkTo} className="thankyou-button">{buttonText}</Link>
            </div>
        </div>
            </div>
     )
}
export default ThankyouSec