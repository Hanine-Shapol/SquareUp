import "./SaAboutSquareUp.css"

const SaAboutSquareUp = ({ title, subtitle, bgImage, icone }) => {
  return (
    <div className="SaAboutSquareUp lm_whitespacing_x">
      <div className="about-text">
        <h2 className="about-title">{title}</h2>
        <p className="about-subtitle">{subtitle}</p>
      </div>
      <div className="about-image" style={{ "--bg-image": `url(${ bgImage || "/assets/images/head-bg-5.png"})` }}>
        <div className="lines-container">
          <div className="line line-0"></div>
          <div className="line line-90"></div>
          <div className="line line-180"></div>
          <div className="line line-270"></div>
        </div>
        <div className="icon-wrapper">
          <img src={icone} alt="About SquareUp icon" className="about-icon"
          />
        </div>
      </div>
    </div>
  )
}

export default SaAboutSquareUp