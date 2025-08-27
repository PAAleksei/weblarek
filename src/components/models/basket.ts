import { IProduct } from "../../types";

export class Basket {
    protected listOfPickedProducts: IProduct[]=[];

    getListOfPickedProducts(): IProduct[]{
        return this.listOfPickedProducts;
    };

    addProductInBasket(item: IProduct): void{
        this.listOfPickedProducts.push(item);
    };

    deleteProductFromBasket(item: IProduct): void{
        this.listOfPickedProducts = this.listOfPickedProducts.filter(product => product.id !== item.id);
    };

    clearBasket(): void{
        this.listOfPickedProducts = [];
    };

    getTotalCost(): number{
        const totalCost = this.listOfPickedProducts.reduce(function(sum:number, currentProduct:IProduct):number{
            return sum + currentProduct.price
        }, 0);
        return totalCost;
    };

    getQuantityOfProducts(): number | null{
        return this.listOfPickedProducts.length;
    };

    checkProductById(id: string): boolean{
        return this.listOfPickedProducts.some(product => product.id === id);
    };
}