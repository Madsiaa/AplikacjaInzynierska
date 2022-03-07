import { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Filterbar from '../components/Filterbar';

const Products = () => {
    const [productsList, setProductsList] = useState([]);

    const getProducts = () => {
        Axios.get('http://localhost:3001/products').then((response) => {
            setProductsList(response.data);
        });
    }

    return (
        <main>
            <h1>Produkty</h1>
            <Link to="/dodaj-produkt" className="btnAddNew">Dodaj nowy produkt</Link>
            <Filterbar />
            <button onClick={ getProducts }>Pokaż produkty</button>
            <div className='product-list-wrapper'>
                { productsList.map((val, key) => {
                    return  <article className='product-wrapper' key={ 'product-' + val.id_product }>
                                <img src={ val.product_image } alt="Przepis" />
                                <p>{ val.product_name }</p>
                                <p>Marka: { val.product_brand }</p>
                                <p>{ val.product_keywords }</p>
                                <Link to="/szczegoly-produktu/:id">Sprawdź szczegóły</Link>
                            </article>
                }) }
            </div>
        </main>
    );
}

export default Products;