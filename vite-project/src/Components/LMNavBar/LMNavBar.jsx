import './LMNavBar.css'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LMNavBar = ({image, items, btn}) => {
    const [show , setShow] = useState(false)

    const showHandel = () => {
        setShow(!show)
    }


    return (
        <>
            <nav className="lm_whitespacing_x">
                <div className="img"><img src={image} alt="logo" /></div>
                <ul className="navItems">
                    {items.map((item , index) => {
                        return(
                            <li key={index} ><NavLink to={item?.url} className={ ({isActive}) => `lm_font_size_weight1 ${isActive ? "active" : "" }`} >{item?.content}</NavLink></li>
                        )
                    })}
                </ul>
                <div className='lm_btns'>
                    <Link to="/ContactUs" className="login lm_font_size_weight1">{btn}</Link>
                </div>
                <button className="bars" onClick={showHandel}><img src="/assets/images/bars.svg" alt="bars" className='icon' /></button>
            </nav>
            <div className={`navMenu ${show? "show" : ""}`}>
                <ul className="navItems">
                    {items.map((item, index)=> {
                        return(
                            <li key={index} ><NavLink to={item?.url} className={ ({isActive}) => `lm_font_size_weight1 ${isActive ? "active" : "" }`} onClick={() => setShow(false)} >{item?.content}</NavLink></li>
                        )
                    })}
                </ul>
                <div className='lm_btns'>
                    <Link to="/ContactUs" className="login lm_font_size_weight1"  onClick={() => setShow(false)}>{btn}</Link>
                </div>
            </div>
        </>
    )
}

export default LMNavBar