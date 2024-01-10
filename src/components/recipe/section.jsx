import React from 'react';
import DishCard from './dish-card';

function Section({ id, backgroundImage, title, description, time, rating }) {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroungRepeat: 'no-repeat',
        backgroundSize: 'cover',
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
