import { checkIsSelected } from "../../views/Order/helpers";
import { Product } from "../../views/Order/types";
import ProductCard from "../ProductCard";

type Props = {
    products: Product[];
    onSelectProduct: (product: Product) => void;
    selectedProducts: Product[];
}

export default function ProductList({ products, onSelectProduct, selectedProducts }: Props) {
    
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                { products.map(product => <ProductCard product={product} key={product.id} onSelectProduct={onSelectProduct} isSelected={checkIsSelected(selectedProducts, product)}/>)}
            </div>
        </div>
    );
}