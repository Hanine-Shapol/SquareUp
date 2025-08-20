import React from 'react';
import './SaWorkone.css';

const SaWorkone = ({ title, subtitle, bgImage }) => { 
    return (
        <div className='SaWorkone'
         style={{ "--bg-image": `url(${bgImage})` }} 
        >
            <div className='headWorkone'>
                <div className="containt">
                    <h2 className="squerup-title">{title}</h2>
                    <p className="squerup-subtitle">{subtitle }</p>
                </div>
            </div>
        </div>
    )
}

export default SaWorkone;
