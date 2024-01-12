import React from 'react';
import DishCard from './dish-card';

function Section({ id, backgroundImage, title, description, time, rating }) {
    const sectionStyle = {
        backgroundImage: `url("data:image/jpg;base64,${backgroundImage}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 128px)',
        position: 'relative',
    };
    return (
        <section style={sectionStyle}>
            <DishCard
                id={id}
                title={title}
                description={description}
                time={time}
                rating={rating}
            />
        </section>
    );
}

export default Section;
