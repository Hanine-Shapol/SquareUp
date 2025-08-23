import './RDCard.css';

const RDCard = ({ number, title, description , titleStyle}) => {
    
    return (
        <div className='RD_Card'>
            <div className='RD_CardHeader'>
                <div className="RD_number">{number}</div>
                <h2 style={titleStyle} className="RD_title">{title}</h2>
            </div>
            <p className="RD_description">{description}</p>
        </div>
    );
};

export default RDCard;
