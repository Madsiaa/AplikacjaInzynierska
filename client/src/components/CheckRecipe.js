import { useEffect, useState } from 'react';
import Axios from 'axios';

const CheckRecipe = () => {
    const [checkRecipesList, setCheckRecipesList] = useState([]);

    const getRecipesToCheck = () => {
        Axios.get('http://localhost:3001/check-recipes').then((response) => {
            setCheckRecipesList(response.data);
        });
    }

    useEffect(() => {
        getRecipesToCheck();
    }, []);

    return (
        <div className="wrapper">
            <h1>Przepisy do zatwierdzenia (na podstronie ze szczegółami przepisu)</h1>
            <div className='recipe-list-wrapper'>
                {checkRecipesList.map((val, key) => {
                    return  <article className='recipe-wrapper' key={ 'recipe-' + val.id_product }>
                                <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="Przepis" />
                                <p>{ val.recipe_name }</p>
                                <p>Autor: { val.recipe_author }</p>
                                <p>Czas wykonania: { val.recipe_time }</p>
                                <p>Trudność: { val.recipe_level }</p>
                                <a href={"/przepisy/" + val.id_recipe }>Sprawdź szczegóły</a>
                            </article>
                })}
            </div>
        </div>
    );
}
 
export default CheckRecipe;