import type { ProductsInterface } from '@/interfaces/interface_product';

export interface ProductListComponentPropsInterface {
    products: ProductsInterface[];
    onAddToCartClick: (productId: number) => void;
    cart: { [key: number]: boolean };
}
