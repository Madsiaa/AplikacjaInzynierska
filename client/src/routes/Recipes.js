import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const  Recipes = () => {
    let userRole = localStorage.getItem('userRole');

    const [recipesList, setRecipesList] = useState([]);

    const getRecipes = () => {
        Axios.get('http://localhost:3001/recipes').then((response) => {
            setRecipesList(response.data);
        });
    }

    useEffect(() => {
        getRecipes();
    }, []);
    
    return (
        <main>
            <h1>Przepisy</h1>
            {userRole === 'admin' && <Link to="/dodaj-przepis" className="btnAddNew">Dodaj nowy przepis</Link>}
            {userRole === 'mod' && <Link to="/dodaj-przepis" className="btnAddNew">Dodaj nowy przepis</Link>}
            {userRole === 'user' && <Link to="/dodaj-przepis" className="btnAddNew">Dodaj nowy przepis</Link>}
            <div className='items-list-wrapper'>
                {recipesList.map((val, key) => {
                    return  <article className='items-wrapper' key={ 'recipe-' + val.id_product }>
                                <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="Przepis" />
                                <p>{ val.recipe_name }</p>
                                <p>Autor: { val.recipe_author }</p>
                                <p>Czas wykonania: { val.recipe_time }</p>
                                <p>Trudność: { val.recipe_level }</p>
                                <Link to={"/przepisy/" + val.id_recipe }>Sprawdź szczegóły</Link>
                            </article>
                })}
            </div>
        </main>
    );




    /*
    const [recipesList, setRecipesList] = useState([]);

    const getRecipes = () => {
        Axios.get('http://localhost:3001/recipes').then((response) => {
            setRecipesList(response.data);
        });
    }

    useEffect(() => {
        getRecipes();
    });

    return (
        <main>
            <h1>Przepisy</h1>
            <Link to="/dodaj-przepis" className='btnAddNew'>Dodaj nowy przepis</Link>
            <Filterbar />
            <div className='recipes-list-wrapper'>
                {recipesList.map((val, key) => {
                    return  <article className='recipe-wrapper' key={ 'recipe-' + val.id_recipe }>
                                <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="Przepis" />
                                <p>{ val.recipe_name }</p>
                                <p>Autor: { val.recipe_author }</p>
                                <p>Czas wykonania: { val.recipe_time }</p>
                                <p>Trudność: { val.recipe_level }</p>
                                <Link to={"/przepisy/" + val.id_recipe }>Sprawdź szczegóły</Link>
                            </article>
                })}
            </div>
        </main>
    );
    */
}
 
export default Recipes;