import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import StepsHeader from '../../Componets/StepsHeader';
import ProductList from '../../Componets/ProductList';
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../../api';
import OrderLocation from '../../Componets/OrderLocation';
import OrderSummary from '../../Componets/OrderSummary';
import Footer from '../../Componets/footer';
import { checkIsSelected } from './helpers';

import './styles.css';

export default function Order() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0)

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(err => toast.warning('Erro ao listar produtos'));
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product)
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
            ...orderLocation!,
            products: productsIds
        }
        
        saveOrder(payload).then((response) => {
            toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
            setSelectedProducts([]);
        })
        .catch(() => {
        toast.warning('Erro ao enviar pedido');
        })
    }

    return(
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary 
                    amount={selectedProducts.length}
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer />
        </>
    );
}