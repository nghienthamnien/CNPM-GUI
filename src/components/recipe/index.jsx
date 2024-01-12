import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Instruction from './instruction';
import IngredientList from './ingredient-list';
import Section from './section';
import callAPI from '../../util/callAPI';
import { setTitle } from '../../util/setTitle';
import './index.css';

const Recipe = () => {
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngre] = useState([]);
    const location = useLocation();
    const { id, title } = location.state;
    setTitle(title);
    useEffect(() => {
        callAPI
            .get(`/dish/${id}`)
            .then((res) => {
                const { data } = res;

                setRecipe(data.data.dish);
                setIngre(data.data.ingredients);
            })
            .catch((err) => console.log(err));
    }, [id]);
    return (
        <>
            <div>
                <Section
                    id={id}
                    title={recipe.title}
                    description={recipe.description}
                    time={recipe.time || 45}
                    rating={recipe.rating || 4.5}
                    backgroundImage={recipe.img_url}
                />
            </div>
            <div className="recipe">
                <IngredientList
                    ingredients={
                        ingredients.length
                            ? ingredients
                            : ['CẢI BẮP', 'DẦU NGÔ', 'CHẢ QUẾ LỢN']
                    }
                />
                <Instruction instructions={recipe.instructions || []} />
            </div>
        </>
    );
};

export default Recipe;
