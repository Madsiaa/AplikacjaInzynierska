import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [productId, setProductId] = useState('');
    console.log('Id: ' + {id});

    const getProduct = () => {
        /*
        Axios.post("http://localhost:3001/send-product-details", { id: productId }).then((response) => {
            console.log(response);
            console.log('Jestem w post')
            Axios.get("http://localhost:3001/get-product-details").then((response) => {
                console.log('Jestem w get')
                setProduct(response.data);
                setProductId({id});
            });
        });
        */

        const postData = Axios.post("http://localhost:3001/send-product-details", { id: productId });
        const getData = Axios.get("http://localhost:3001/get-product-details");
        setProductId({id});

        Axios.all([postData, getData]).then(Axios.spread((...responses) => {
            const postRes = responses[0];
            const getRes = responses[1];
            setProduct(getRes.data);
        }));
    }

    useEffect(() => {
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