import React from 'react';
import ReactDOM from 'react-dom';
import AccountDetails from '../components/AccountDetails';
import FavProducts from '../components/FavProducts';
import FavRecipes from '../components/FavRecipes';
import CreateProduct from '../components/CreateProduct';
import CheckRecipe from '../components/CheckRecipe';
import AddAdmin from '../components/AddAdmin';

const rednerAccountDetails = () => {
    ReactDOM.render(<AccountDetails/>, document.getElementById('account-details-wrapper'));
}

const rednerFavProducts = () => {
    ReactDOM.render(<FavProducts />, document.getElementById('account-details-wrapper'));
}

const rednerFavRecipes = () => {
    ReactDOM.render(<FavRecipes />, document.getElementById('account-details-wrapper'));
}

const rednerCreateProduct = () => {
    ReactDOM.render(<CreateProduct />, document.getElementById('account-details-wrapper'));
}

const rednerCheckRecipe = () => {
    ReactDOM.render(<CheckRecipe />, document.getElementById('account-details-wrapper'));
}

const rednerAddAdmin = () => {
    ReactDOM.render(<AddAdmin />, document.getElementById('account-details-wrapper'));
}

const Account = () => {
    return (
        <main>
            <h1>Konto</h1>
            <div className="content-wrapper">
                <div className="account-nav">
                    <ul>
                        <li onClick={ rednerAccountDetails }>Dane konta</li>
                        <li onClick={ rednerFavProducts }>Ulubione produkty</li>
                        <li onClick={ rednerFavRecipes }>Ulubione przepisy</li>
                        <li onClick={ rednerCreateProduct }>Dodaj produkt</li>
                        <li onClick={ rednerCheckRecipe }>Zatwierdź przepis</li>
                        <li onClick={ rednerAddAdmin }>Dodaj admina</li>
                    </ul>
                </div>
                <section id="account-details-wrapper">
                    <h3>Wybierz opcję z menu po lewej!</h3>
                </section>
            </div>
        </main>
    );
}
 
export default Account;