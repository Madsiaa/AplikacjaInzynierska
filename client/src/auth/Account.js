
import React from 'react';
/*
import AccountDetails from '../components/AccountDetails';
import FavProducts from '../components/FavProducts';
import FavRecipes from '../components/FavRecipes';
import CreateProduct from '../components/CreateProduct';
import CheckRecipe from '../components/CheckRecipe';
import AddAdmin from '../components/AddAdmin';
*/

const Account = () => {
    return (
        <main>
            <h1>Konto</h1>
            <div className="content-wrapper">
                <div className="account-nav">
                    <ul>
                        <li>Dane konta</li>
                        <li>Ulubione produkty</li>
                        <li>Ulubione przepisy</li>
                        <li>Dodaj produkt</li>
                        <li>Zatwierdź przepis</li>
                        <li>Dodaj admina</li>
                    </ul>
                </div>
                <section id="account-details-wrapper">
                    <p>Component section</p>
                    
                </section>
            </div>
        </main>
    );
}
 
export default Account;