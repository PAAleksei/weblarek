export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';
export type TPayment = 'card' | 'cash' | '';
export type TId = string; 

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export interface IProduct {
    id: TId;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}

export interface ICostumer {
    payment: TPayment;
    email: string;
    address: string;
    phone: string;
}

export interface IApiData {
    total: number; 
    items: IProduct[];
}

export interface IOrder extends ICostumer{
    total: number;
    items: TId[];
}

export interface ISuccessResponse {
    id: TId;
    total: number;
}

export interface IErrorsResponse {
    error: string;
}
