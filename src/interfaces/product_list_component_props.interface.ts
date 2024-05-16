import type { ProductsInterface } from '@/interfaces/interface_product';

export interface ProductListComponentPropsInterface {
    products: ProductsInterface[];
    selectedProducts: number[];
    toggleProductSelection: (productId: number) => void;
}
