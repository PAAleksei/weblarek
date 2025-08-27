import { IProduct } from "../../types"; 

export class Products {
    protected listOfProducts: IProduct[]=[];
    protected pickedProduct: IProduct;

    setListOfProducts(list: IProduct[]): void{
        this.listOfProducts = list;
    };
    
    getListOfProducts(): IProduct[]{
        return this.listOfProducts;
    };

    setPickedProduct(product: IProduct): void{
        this.pickedProduct = product;
    };

    getPickedProduct(): IProduct{
        return this.pickedProduct;
    };
    
    getProductById(id: string): IProduct | undefined{
        let findedProduct = this.listOfProducts.find((product)=>{
            return product.id === id;
        })
        return findedProduct;
    };
}