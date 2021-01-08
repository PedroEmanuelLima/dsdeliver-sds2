import { useEffect, useState } from 'react';

import './styles.css';

import StepsHeader from '../../Componets/StepsHeader';
import ProductList from '../../Componets/ProductList';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../../api';
import OrderLocation from '../../Componets/OrderLocation';

export default function Order() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(err => console.log(err));
    }, []);

    return(
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductList products={products}/>
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            </div>
        </>
    );
}