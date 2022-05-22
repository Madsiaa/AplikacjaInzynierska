import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const RecipeDetails = () => {
    let userRole = localStorage.getItem('userRole');

    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);
    const [recipeId, setRecipeId] = useState('');

    const getRecipe = () => {
        setRecipeId(id);
        Axios.post("http://localhost:3001/recipe-details", { 
            id: recipeId 
        }).then((response) => {
            setRecipe(response.data);
        });
    }

    useEffect(() => {
        getRecipe();
    });

    const addToFav = () => {
        let user = localStorage.getItem('userName');
        let userProducts = localStorage.getItem('userFavRecipe');
        if(userProducts === ''){
            Axios.post("http://localhost:3001/add-recipe-fav", {
                items: id,
                user: user
            }).then((response) => {
                console.log(response);
            });
        } else {
            let favRecipeArray = localStorage.getItem('userFavRecipe').split(',');
            favRecipeArray.push(id);
            favRecipeArray.join();

            Axios.post("http://localhost:3001/add-recipe-fav", {
                items: favRecipeArray,
                user: user
            }).then((response) => {
                console.log(response);
            });
        }
    }

    const acceptRecipe = () => {
        Axios.post('http://localhost:3001/accept-recipe', {
            id: recipeId
        }).then((response) => {
            console.log(response);
        });
    }

    return (
        <main>
            <h1>Szczegóły przepisu ID: { id }</h1>
            {recipe.map((val, key) => {
                return <article className='recipe-details-wrapper' key={key}>
                        <button onClick={ addToFav }>Dodaj do ulubionych</button>
                        {userRole === 'admin' && <button className='confirm' onClick={ acceptRecipe }>Zaakceptuj przepis</button>}
                        {userRole === 'mod' && <button className='confirm' onClick={ acceptRecipe }>Zaakceptuj przepis</button>}
                        <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="zdjęcie przepisu" />
                        <p><b>Nazwa przepisu: </b>{ val.recipe_name }</p>
                        <p><b>Autor przepisu: </b>{ val.recipe_author }</p>
                        <p><b>Opis przepisu: </b>{ val.recipe_description }</p>
                        <p><b>Składniki przepisu: </b>{ val.recipe_ingredients }</p>
                        <p><b>Kroki: </b>{ val.recipe_steps }</p>
                        <p><b>Czas wykonywania przepisu: </b>{ val.recipe_time }</p>
                        <p><b>Trudność przepisu: </b>{ val.recipe_level }</p>
                        <p><b>Słowa kluczowe: </b>{ val.recipe_keywords }</p>
                       </article>
            })}
        </main>
    );
}
 
export default RecipeDetails;