import { PriceModel } from "./price.model";

export class BookModel {
    public id: number = 0;
    public title: string = '';
    public totalPages: number = 0;
    private _author: string = '';
    public price: PriceModel = {currency: '', value: 0};

    public set author(value: string){
        this._author = value;
    }
    public get author(){
        return ('Author: '+ this._author);
    }
}