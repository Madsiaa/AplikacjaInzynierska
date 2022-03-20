import { useState } from 'react';
import Axios from 'axios';

const CreateProducts = () => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [nutrition, setNutrition] = useState('');
    const [allergens, setAllergens] = useState('');
    const [keywords, setKeywords] = useState('');

    const addProduct = () => {
        Axios.post('http://localhost:3001/create-product', {
            name: name, 
            brand: brand, 
            description: description, 
            weight: weight, 
            ingredients: ingredients, 
            nutrition: nutrition, 
            allergens: allergens, 
            keywords: keywords
        }).then(() => {
            alert('Pomyślnie dodano produkt do bazy!');
        })
    };

    return ( 
        <main>
            <h1>Dodaj nowy produkt</h1>
            <div className="form">
                <label htmlFor="">Nazwa produktu</label>
                <input type="text" onChange={ (event) => { setName(event.target.value) } }/>

                <label htmlFor="">Marka produktu</label>
                <input type="text" onChange={ (event) => { setBrand(event.target.value) } }/>

                <label htmlFor="">Opis produktu</label>
                <textarea rows="5" cols="66" onChange={ (event) => { setDescription(event.target.value) } }/>

                <label htmlFor="">Waga produktu</label>
                <input type="text" onChange={ (event) => { setWeight(event.target.value) } }/>

                <label htmlFor="">Składniki produktu</label>
                <textarea rows="7" cols="66" onChange={ (event) => { setIngredients(event.target.value) } }/>

                <label htmlFor="">Wartości odżywcze produktu</label>
                <textarea rows="7" cols="66" onChange={ (event) => { setNutrition(event.target.value) } }/>

                <label htmlFor="">Alergeny produktu</label>
                <textarea rows="4" cols="66" onChange={ (event) => { setAllergens(event.target.value) } }/>

                <label htmlFor="">Słowa kluczowe produktu</label>
                <input type="text" onChange={ (event) => { setKeywords(event.target.value) } }/>

                <button onClick={ addProduct }>Dodaj produkt</button>
            </div>
        </main>
    );
}
 
export default CreateProducts;