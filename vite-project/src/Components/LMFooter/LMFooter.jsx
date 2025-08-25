import { Link } from 'react-router-dom'
import './LMFooter.css'



const LMFooter = ({image, items}) => {

    const socialIcons = [
        { name: "Facebook", url: "https://www.facebook.com/focal.x.agency/", icon: "/assets/images/facebook.svg" },
        { name: "Twitter", url: "https://twitter.com/focal_x_agency?t=4jk3EdcOYPA9mvvWFnjuww&s=09", icon:" /assets/images/twitter.svg"},
        { name: "LinkedIn", url: "https://www.linkedin.com/company/focal-x-agency/", icon: "/assets/images/linkedin.svg"},
    ];

    const openSocialLink = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <footer className="lm_whitespacing_x">
                <div className="lm_footer_Part1">
                    <div className="lm_img"><img src={image} alt="logo" /></div>
                    <div className='lm_line_for_img'></div>
                    <ul className="lm_navItems">
                        {items.map((item , index) => {
                            return(
                                <li key={index} ><Link to={item?.url} className="lm_font_size_weight2">{item?.content}</Link></li>
                            )
                        })}
                    </ul>
                    <div className='lm_stay_Connected'>
                        <p className="lm_font_size_weight2">Stay Connected</p>
                        <div className="lm_socialIcons">
                            {socialIcons.map((item, index) => (
                                <div
                                    key={index}
                                    className="lm_socialLink"
                                    onClick={() => openSocialLink(item.url)}
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="lm_socialIcon"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lm_footer_Part2">
                    <div className='lm_contactIcons'>
                        <div className='lm-contactIcon'>
                            <img src="/assets/images/email.svg" alt="icon" />
                            <span className='lm_font_size_weight2'>hello@squareup.com</span>
                        </div>
                        <div className='lm-line'></div>
                        <div className='lm-contactIcon'>
                            <img src="/assets/images/phone.svg" alt="icon" />
                            <span className='lm_font_size_weight2'>+91 91813 23 2309</span>
                        </div>
                        <div className='lm-line'></div>
                        <div className='lm-contactIcon'>
                            <img src="/assets/images/location.svg" alt="icon" />
                            <span className='lm_font_size_weight2'>Somewhere in the World</span>
                        </div>
                        <div className='lm-line'></div>
                    </div>
                    <p className='lm_font_size_weight2'>&copy; 2023 SquareUp. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default LMFooter
