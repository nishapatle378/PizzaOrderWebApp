import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food'
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
getFoodById(id:number): Food{
return this.getAllImg().find(food =>food.id == id)!;
}
  getAllImg():Food[]{
return [
  // '/assets/images/Pizza-1.png',
  // '/assets/images/Pizza-2.png',
  // '/assets/images/Pizza-3.png',
  // '/assets/images/Pizza-4.png',
  // '/assets/images/Pizza-5.png',
  // '/assets/images/Pizza-6.png',
  // '/assets/images/Pizza-7.png',
  // '/assets/images/Pizza-8.png'
{
  id:1,
  price:300,
  name: 'Paneer Tikka Pizza',
  veg: '',
  star: 4.0,
  tags:['FastFood', 'Pizza'],
  imageUrl:'/assets/images/Pizza-4.png',
  cookTime:'30-40',
  ingredients:['Tender Paneer Tikka, Corn, Olives, Onion, Mozzarella Cheese.'],
  topping:['Extraa Cheese', 'Paneer tikka (Extra)', 'Green bellpaper', 'Jalapeno Slice']
},
{
  id:2,
  price:400,
  name: 'Spanish Sunshine Pizza',
  veg: '',
  star: 3.5,
  tags:['FastFood', 'Pizza'],
  imageUrl:'/assets/images/Pizza-3.png',
  cookTime:'30-40',
  ingredients:['American Corn, Jalapenos, Crunchy Capsicum, Onion, Mozzarella Cheese.'],
  topping:['Extraa Cheese', 'Paneer tikka (Extra)', 'Green bellpaper', 'Jalapeno Slice']
},
{
  id:3,
  price:300,
  name: 'Garden Fresh Veggie Pizza',
  veg: '',
  star: 3.0,
  tags:['FastFood', 'Pizza'],
  imageUrl:'/assets/images/Pizza-5.png',
  cookTime:'30-40',
  ingredients:['An abundance of delicious veggies- Jalapenos, Corn, Black Olives, Crunchy Bell Peppers.'],
  topping:['Extraa Cheese', 'Paneer tikka (Extra)', 'Green bellpaper', 'Jalapeno Slice']
},
{
  id:4,
  price:300,
  name: 'Five Veggies Surprise Pizza',
  veg: '',
  star: 5.0,
  tags:['FastFood', 'Pizza'],
  imageUrl:'/assets/images/Pizza-6.png',
  cookTime:'30-40',
  ingredients:['Tender Paneer Tikka, Jalapenos, Black Olives, American Corn, Onion, Mozzarella Cheese. '],
  topping:['Extraa Cheese', 'Paneer tikka (Extra)', 'Green bellpaper', 'Jalapeno Slice']
},
{
  id:5,
  price:200,
  name: 'Margherita Pizza',
  veg: '',
  star: 4.0,
  tags:['FastFood', 'Pizza'],
  imageUrl:'/assets/images/Pizza-1.png',
  cookTime:'15-20',
  ingredients:['Mozzarella Cheese, Parsley. Relish rich Mozzarella cheese.'],
  topping:['Extraa Cheese', 'Paneer tikka (Extra)', 'Green bellpaper', 'Jalapeno Slice']
},
{
  id:6,
  price:300,
  name: 'Corn and Cheese Pizza',
  veg: '',
  star: 4.0,
  tags:['FastFood', 'Pizza'],
  imageUrl:'/assets/images/Pizza-2.png',
  cookTime:'30-40',
  ingredients:['American Corn, Mozarella Cheese. Enjoy juicy kernels of American corn.'],
  topping:['Extraa Cheese', 'Paneer tikka (Extra)', 'Green bellpaper', 'Jalapeno Slice']
},
{
  id:7,
  price:300,
  name: 'Caramelized Onion Pizza',
  veg: '',
  star: 4.0,
  tags:['FastFood', 'Pizza'],
  imageUrl:'/assets/images/Pizza-4.png',
  cookTime:'40-50',
  ingredients:['Golden caramelized onions, Barbeque sauce, Mozarella Cheese.'],
  topping:['Extraa Cheese', 'Paneer tikka (Extra)', 'Green bellpaper', 'Jalapeno Slice']
},
{
  id:8,
  price:300,
  name: 'Corn Veggie Delight Pizza',
  veg: '',
  star: 4.0,
  tags:['FastFood', 'Pizza'],
  imageUrl:'/assets/images/Pizza-3.png',
  cookTime:'20-30',
  ingredients:['American Corn, Crunchy Bell Peppers, Onion, Mozzarella Cheese.'],
  topping:['Extraa Cheese', 'Paneer tikka (Extra)', 'Green bellpaper', 'Jalapeno Slice']
},
]
  }
}
