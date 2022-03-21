import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [productId, setProductId] = useState('');

    const getProductDetails = () => {
        setProductId(id);
        Axios.post("http://localhost:3001/product-details", { 
            id: productId 
        }).then((response) => {
            setProduct(response.data);            
        });
    }

    useEffect(() => {
        getProductDetails();
    }, []);

    const addToFav = () => {
        let user = localStorage.getItem('userName');
        let favProductArray = localStorage.getItem('userFavProduct').split(',');
        favProductArray.push(id);
        favProductArray.join();
        Axios.post("http://localhost:3001/add-product-fav", {
            items: favProductArray,
            user: user
        }).then((response) => {
            console.log(response);
        });
    }

    return (
        <main>
            <h1>Szczegóły produktu ID: { id }</h1>
            {product.map((val, key) => {
                return <article className='product-details-wrapper'>
                        <button onClick={ addToFav }>Dodaj produkt do ulubionych</button>
                        <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="zdjęcie produktu" />
                        <p><b>Nazwa produktu: </b>{ val.product_name }</p>
                        <p><b>Marka produktu: </b>{ val.product_brand }</p>
                        <p><b>Opis produktu: </b>{ val.product_description }</p>
                        <p><b>Składniki produktu: </b>{ val.product_ingredients }</p>
                        <p><b>Alergeny produktu: </b>{ val.product_allergens }</p>
                        <p><b>Wartości odżywcze produktu: </b>{ val.product_nutrition }</p>
                        <p><b>Gramatura produktu: </b>{ val.product_weight }</p>
                        <p><b>Słowa kluczowe: </b>{ val.product_keywords }</p>
                       </article>
            })}
        </main>
    );
}
 
export default ProductDetails;