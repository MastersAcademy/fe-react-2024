export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAd: string;
    updatedAd: string;
    category: ProductCategory;
}

export interface ProductCategory {
    id: number;
    name: string;
    image: string;
    creationAd: string;
    updatedAt: string;
}
