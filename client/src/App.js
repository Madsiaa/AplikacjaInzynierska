import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './routes/Products';
import CreateProduct from './components/CreateProduct';
import ProductDetails from './routes/ProductDetails';
import Diets from './routes/Diets';
import Recipes from './routes/Recipes';
import CreateRecipe from './routes/CreateRecipe';
import RecipeDetails from './routes/RecipeDetails';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Account from './auth/Account';
import Signout from './auth/Signout';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/produkty" element={ <Products /> } />
        <Route path="/dodaj-produkt" element={ <CreateProduct /> } />
        <Route path="/produkty/:id" element={ <ProductDetails /> } />
        <Route path="/diety" element={ <Diets /> } />
        <Route path="/przepisy" element={ <Recipes /> } />
        <Route path="/dodaj-przepis" element={ <CreateRecipe /> } />
        <Route path="/przepisy/:id" element={ <RecipeDetails /> } />
        <Route path="/zaloguj" element={ <Login /> } />
        <Route path="/zarejestruj" element={ <Signup /> } />
        <Route path="/konto" element={ <Account /> } />
        <Route path="/wyloguj" element={ <Signout /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;