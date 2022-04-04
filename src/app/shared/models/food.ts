export class Food {
    id!:number;
    price!:number;
    name!:string;
    veg!:string;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    ingredients!:string[];
    topping!:string[];
}
