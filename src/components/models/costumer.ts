import { ICostumer, ICostumerValidationForm, TPayment } from "../../types";

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

    validateDataOfCostumer(): ICostumerValidationForm{
        const validationForm = {};

        const costumerForm = this.getDataOfCostumer();

        for(let property in costumerForm){
            if(!costumerForm[property]){
                validationForm[property] = 'Поле не должно быть пустым';
            }
            else {validationForm[property] = ''}
        }
        return validationForm as ICostumerValidationForm;
    };
}