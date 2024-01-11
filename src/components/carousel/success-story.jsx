import React from 'react';

const SuccessStory = ({ info, imageLink, quote }) => {
    const sectionStyle = {
        height: '200px',
        width: '35%',
        backgroundImage: `url(${imageLink})`,
        backgroungRepeat: 'no-repeat',
        minHeight: '300px',
        backgroundSize: 'cover',
        display: 'inline-block',
    };
    return (
        <div className="success-story">
            <div style={sectionStyle} />
            <div className="quote">
                <q>{quote}</q>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default SuccessStory;
