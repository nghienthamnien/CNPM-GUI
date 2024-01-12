import React from 'react';

const SuccessStory = ({ info, imageLink, quote }) => (
    <div className="success-story">
        <div className="card-image">
            <img src={imageLink} alt="Hình ảnh nào đó" />
        </div>
        <div className="quote">
            <q>{quote}</q>
            <p>{info}</p>
        </div>
    </div>
);

export default SuccessStory;
