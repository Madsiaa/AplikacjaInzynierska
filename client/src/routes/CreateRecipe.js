import { useState } from "react";
import Axios from "axios";

const CreateRecipe = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [keywords, setKeywords] = useState('');

    const addRecipe = () => {
        Axios.post('http://localhost:3001/create-recipe', {
            name: name, 
            author: author,
            description: description,  
            ingredients: ingredients, 
            steps: steps, 
            keywords: keywords
        }).then(() => {
            alert('Pomyślnie dodano przepis do bazy!');
        })
    };

    return ( 
        <main>
            <h1>Dodaj nowy przepis</h1>
            <div className="form">
                <label htmlFor="">Nazwa przepisu</label>
                <input type="text" onChange={ (event) => { setName(event.target.value) } }/>

                <label htmlFor="">Autor przepisu</label>
                <input type="text" onChange={ (event) => { setAuthor(event.target.value) } }/>

                <label htmlFor="">Opis przepisu</label>
                <textarea rows="5" cols="66" onChange={ (event) => { setDescription(event.target.value) } }/>

                <label htmlFor="">Składniki przepisu</label>
                <textarea rows="7" cols="66" onChange={ (event) => { setIngredients(event.target.value) } }/>

                <label htmlFor="">Kolejne kroki wykonania przepisu</label>
                <textarea rows="7" cols="66" onChange={ (event) => { setSteps(event.target.value) } }/>

                <label htmlFor="">Słowa kluczowe przepisu</label>
                <input type="text" onChange={ (event) => { setKeywords(event.target.value) } }/>

                <button onClick={ addRecipe }>Dodaj przepis</button>
            </div>
        </main>
    );
}
 
export default CreateRecipe;