
import './SATrustedLogos.css';


const SATrustedLogos = ({subTitle, icon1Trusted, icon2Trusted, icon3Trusted, icon4Trusted, icon5Trusted, icon6Trusted}) => {
    return (
        <section className="trustedlogo">
        <div className="trusted-header">
        <p className="trusted-header-text">{subTitle}</p>
        </div>
            <div className ="TrustedLogos-content">
                <img src={icon1Trusted} alt="Company trusted Icon1" className="trusted-icon1" />
                <img src={icon2Trusted} alt="Company trusted Icon2" className="trusted-icon2" />
                <img src={icon3Trusted} alt="Company trusted Icon3" className="trusted-icon3" />
                <img src={icon4Trusted} alt="Company trusted Icon4" className="trusted-icon4" />
                <img src={icon5Trusted} alt="Company trusted Icon5" className="trusted-icon5" />
                <img src={icon6Trusted} alt="Company trusted Icon6" className="trusted-icon6" />
            </div>
        </section>
    
        )

}
export default SATrustedLogos


