export  class product {
       _id :string;
 name:string    ;
    price :number ;
    priceTtc:number ; 
    rem: number;
    constructor(_id:string,name:string,price:number,priceTtc:number,rem:number) {
        this._id=_id;
        this.name=name;
        this.price=price ; 
        this.priceTtc=priceTtc ; 
        this.rem=rem
    }
}