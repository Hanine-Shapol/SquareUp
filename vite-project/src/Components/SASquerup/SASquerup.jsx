
import './SASquerup.css'

const SASquerup = ({ title, subtitle, subtitleContainer }) => {
  return (
    <div className="lm_whitespacing_x">
      <section className="squerup">
        <div className="squerup-content">
          <h1 className="squerup-title">{title}</h1>
          <p className="squerup-subtitle">{subtitle}</p>
        </div>

        <div className="squerup-container">
          <p className="container-subtitle">{subtitleContainer}</p>
        </div>
      </section>
    </div>
    
  );
};

export default SASquerup;


