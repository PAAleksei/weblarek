import { IApi, IApiData, IErrorsResponse, IOrder, ISuccessResponse } from "../../types";

export class ApiData {
    protected api: IApi;

    constructor(api: IApi) {
        this.api = api;
    };

    getDataItems(): Promise<IApiData> {
        return this.api.get<IApiData>('/product/'); 
    };

    postDataOrder(order: IOrder): Promise<ISuccessResponse | IErrorsResponse> {
       return this.api.post<ISuccessResponse | IErrorsResponse>('/order/', order);
    };
};