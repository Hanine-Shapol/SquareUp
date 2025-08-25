import './MmWorkCard.css';

const MmWorkCard = ({ title, image, webName, urlWeb, description }) => {
    return (
        <div className="work-card">
            <h3>{title}</h3>
            <img className="project-photo" src={image} alt={title} />
            <span>{webName}</span>
            <div>
                <a href={urlWeb} target="_blank" rel="noopener noreferrer">{urlWeb}</a>
                <div className='slanted-arrow'><img src="/assets/images/Slanted-arrow.svg" alt="" /></div>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default MmWorkCard;
