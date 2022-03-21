import { useEffect, useState } from 'react';
import Axios from 'axios';

const FavRecipes = () => {
    let favRecipesArray = localStorage.getItem('userFavRecipe').split(',');
    const [favRecipesList, setFavRecipesList] = useState([]);

    const getFavRecipes = () => {
        favRecipesArray.forEach(id => {
            Axios.post('http://localhost:3001/fav-recipes', {
                favRecipesId: id
            }).then((response) => {
                setFavRecipesList(response.data);
            });
        });
    }

    useEffect(() => {
        getFavRecipes();
    }, []);

    return (
        <div className="fav-products-wrapper">
            <h1>Ulubione przepisy</h1>
            <div className='product-list-wrapper'>
                {favRecipesList.map((val, key) => {
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
 
export default FavRecipes;