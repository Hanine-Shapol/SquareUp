
import './SASquerup.css';

const SASquerup = ({ title, subtitle, subtitleContainer }) => {
  return (
    <section className="squerup lm_whitespacing_x">
      <div className="squerup-content">
        <h1 className="squerup-title">{title}</h1>
        <p className="squerup-subtitle">{subtitle}</p>
      </div>

      <div className="squerup-container">
        <p className="container-subtitle">{subtitleContainer}</p>
      </div>
    </section>
  );
};

export default SASquerup;


