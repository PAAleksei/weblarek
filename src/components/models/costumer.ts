import { ICostumer, TErrorText, TPayment } from "../../types";

export class Costumer {
    protected payment: TPayment;
    protected email: string;
    protected address: string;
    protected phone: string;

    constructor(){
        this.payment = '';
        this.email = '';
        this.address = '';
        this.phone = '';
    }
    setPayment(item: TPayment): void{
        this.payment = item;
    };

    setEmail(item: string): void{
        this.email = item;
    };

    setAddress(item: string): void{
        this.address = item;
    };

    setPhone(item: string): void{
        this.phone = item;
    };

    getDataOfCostumer(): ICostumer{
        return {
            payment: this.payment,
            email: this.email,
            address: this.address,
            phone: this.phone,
        }
    };

    clearDataOfCostumer(): void{
        this.payment = '';
        this.email = '';
        this.address = '';
        this.phone = '';
    };

    validateDataOfCostumer(dataValue: string | TPayment): TErrorText{
        let errorText;
        
        if(dataValue){
            errorText = ''
        }
        else{
            errorText = 'Поле не должно быть пустым'
        }
        return errorText;
    };
}