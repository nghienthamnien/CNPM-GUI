import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Instruction from './instruction';
import Ingredient from './ingredient';
import Section from './section';
import callAPI from '../../util/callAPI';
import { setTitle } from '../../util/setTitle';
import './index.css';

const Recipe = () => {
    const [recipe, setRecipe] = useState({});
    const location = useLocation();
    const { id, title } = location.state;
    setTitle(title);
    useEffect(() => {
        callAPI
            .get(`/dish/${id}`)
            .then((res) => {
                const { data, status } = res;
                console.log(data, status);

                setRecipe(data.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <>
            <div>
                <Section
                    title={recipe.title}
                    description={recipe.description}
                    time={recipe.time || 45}
                    rating={recipe.rating || 4.5}
                    backgroundImage={
                        recipe.dishImage ||
                        'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/pho-style-beef-noodle-soup-f314a261.jpg'
                    }
                />
            </div>
            <div className="recipe">
                <Ingredient ingredients={recipe.ingredients || []} />
                <Instruction instructions={recipe.instructions || []} />
            </div>
        </>
    );
};

export default Recipe;
