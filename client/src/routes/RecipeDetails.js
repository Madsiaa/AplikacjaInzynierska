import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const RecipeDetails = () => {
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
    }, []);

    // napisać logikę
    const addToFav = () => {
        console.log("Kliknięto przycisk!");
    }

    return (
        <main>
            <h1>Szczegóły przepisu ID: { id }</h1>
            {recipe.map((val, key) => {
                return <article className='recipe-details-wrapper'>
                        <button onClick={ addToFav() }>Dodaj do ulubionych</button>
                        <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="zdjęcie przepisu" />
                        <p><b>Nazwa przepisu: </b>{ val.product_name }</p>
                        <p><b>Autor przepisu: </b>{ val.product_brand }</p>
                        <p><b>Opis przepisu: </b>{ val.product_description }</p>
                        <p><b>Składniki przepisu: </b>{ val.product_ingredients }</p>
                        <p><b>Kroki: </b>{ val.product_allergens }</p>
                        <p><b>Czas wykonywania przepisu: </b>{ val.product_nutrition }</p>
                        <p><b>Trudność przepisu: </b>{ val.product_weight }</p>
                        <p><b>Słowa kluczowe: </b>{ val.product_keywords }</p>
                       </article>
            })}
        </main>
    );
}
 
export default RecipeDetails;