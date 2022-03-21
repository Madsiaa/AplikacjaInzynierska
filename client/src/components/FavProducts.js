import { useEffect, useState } from 'react';
import Axios from 'axios';

const FavProducts = () => {
    let favProductsArray = localStorage.getItem('userFavProduct').split(',');
    const [favProductsList, setFavProductsList] = useState([]);

    const getFavProducts = () => {
        favProductsArray.forEach(id => {
            Axios.post('http://localhost:3001/fav-products', {
                favProductId: id
            }).then((response) => {
                setFavProductsList(response.data);
            });
        });
    }
    
    useEffect(() => {
        getFavProducts();
    }, []);

    return (
        <div className="fav-products-wrapper">
            <h1>Ulubione produkty</h1>
            <div className='product-list-wrapper'>
                {favProductsList.map((val, key) => {
                    return  <article className='product-wrapper' key={ 'product-' + val.id_product }>
                                <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="Przepis" />
                                <p>{ val.product_name }</p>
                                <p>Marka: { val.product_brand }</p>
                                <p>{ val.product_keywords }</p>
                                <a href={"/produkty/" + val.id_product }>Sprawdź szczegóły</a>
                            </article>
                })}
            </div>
        </div>
    );
}
 
export default FavProducts;