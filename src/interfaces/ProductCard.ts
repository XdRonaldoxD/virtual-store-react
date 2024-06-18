export default interface ProductCard{
    id:string,
    title:string,
    description?: string;
    price:number,
    color?:string,
    image?:string,
    quantity?: number;
    images?: Array<string>;
    colors?: Array<string>;
}