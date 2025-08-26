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

    getTotalCost(): number | null{
        let totalCost: number | null = 0;
        
        this.listOfPickedProducts.forEach((product) => {
            
            if(product.price && totalCost !== null){
                totalCost = totalCost + product.price;
            }
            else if(product.price === null){
                totalCost = totalCost;
            }
            else if(product === undefined){
                totalCost = null;
            }
        });
        return totalCost === 0||null ? null : totalCost;
    };

    getQuantityOfProducts(): number | null{
        return this.listOfPickedProducts.length;
    };

    checkProductById(id: string): boolean{
        return this.listOfPickedProducts.some(product => product.id === id);
    };
}