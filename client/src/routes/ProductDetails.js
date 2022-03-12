import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [productId, setProductId] = useState('');

    useEffect(() => {
        const getProduct = () => {
            Axios.get("http://localhost:3001/product-details", { id: productId }).then((response) => {
                setProduct(response.data);
                setProductId({id});
            });
        }
        getProduct();
    }, []);

    return (
        <main>
            <h1>Szczegóły produktu ID: { id }</h1>
            {product.map((val, key) => {
                return <article className='product-details-wrapper'>
                        <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt="zdjęcie produktu" />
                        <p>Nazwa produktu: { val.product_name }</p>
                        <p>Marka produktu: { val.product_brand }</p>
                        <p>Opis produktu: { val.product_description }</p>
                        <p>Składniki produktu: { val.product_ingredients }</p>
                        <p>Alergeny produktu: { val.product_allergens }</p>
                        <p>Wartości odżywcze produktu: { val.product_nutrition }</p>
                        <p>Gramatura produktu: { val.product_weight }</p>
                        <p>Słowa kluczowe: { val.product_keywords }</p>
                       </article>
            })}
        </main>
    );
}
 
export default ProductDetails;