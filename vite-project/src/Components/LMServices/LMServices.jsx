import { Link } from 'react-router-dom';
import './LMServices.css';

const LMServices = ({ image, title, paragraph, btn, showButton = true, horizontal = false }) => {
    return (
        <div className="lm-card">
            <div className={`lm-container ${horizontal ? "horizontal" : ""}`}>
                <div className="lm-card-img">
                    <img src={image} alt="icon" className='lm-img' />
                </div>
                <h3 className="lm-card-title">{title}</h3>
            </div>
            <p className="lm-card-paragraph">{paragraph}</p>
            {showButton && (
                <div className="lm-card-button">
                    <Link to="/Work" className='lm-link'>{btn}</Link>
                </div>
            )}
        </div>
    )
}

export default LMServices;
