import { Link } from "react-router-dom";
import "./SaTodaySquareUp.css";

const SaTodaySquareUp = ({ icon, title, subtitle, subtitleCta, highlightCta, linkTo ,buttonText }) => {
  return (
    <div className="SaTodaySquareUp lm_whitespacing_x">
      
    <div className="top-section">
        <div className="icon-box">
            <img src={icon} alt="SquareUp icon" />
        </div>
        <div className="text-box">
            <h3 className="title">{title}</h3>
            <p className="subtitle">{subtitle}</p>
        </div>
    </div>

      <div className="cta-bar">
        <p className="small-text">{subtitleCta}</p>
        <div className="countainer-highlight">
        <p className="highlight-text">{highlightCta}</p>
        </div>
        <Link to ={linkTo} className="cta-button">{buttonText}</Link>
      </div>
    </div>
    
  )
}

export default SaTodaySquareUp
