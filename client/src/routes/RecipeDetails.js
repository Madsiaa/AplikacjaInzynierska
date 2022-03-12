import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);
    const [recipeId, setRecipeId] = useState('');
    console.log({id});

    useEffect(() => {
        const getRecipe = () => {
            Axios.get("http://localhost:3001/recipe-details", { id: recipeId }).then((response) => {
                console.log(response.data);
                setRecipe(response.data);
                setRecipeId({id});
            });
        }
        getRecipe();
    }, []);

    return (
        <main>
            <h1>Szczegóły przepisu</h1>
            {recipe.map((val, key) => {
                return <article className='recipe-details-wrapper'>
                        <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="zdjęcie przepisu" />
                        <p>Nazwa przepisu: { val.product_name }</p>
                        <p>Autor przepisu: { val.product_brand }</p>
                        <p>Opis przepisu: { val.product_description }</p>
                        <p>Składniki przepisu: { val.product_ingredients }</p>
                        <p>Kroki: { val.product_allergens }</p>
                        <p>Czas wykonywania przepisu: { val.product_nutrition }</p>
                        <p>Trudność przepisu: { val.product_weight }</p>
                        <p>Słowa kluczowe: { val.product_keywords }</p>
                       </article>
            })}
        </main>
    );
}
 
export default RecipeDetails;