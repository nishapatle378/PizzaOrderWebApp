import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../shared/food/Cart.service';
import { FoodService } from '../shared/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cart-item';
import { ToppingService } from '../shared/topping.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  @ViewChild('pizza', { static: true, read: ViewContainerRef })
  pizza!: ViewContainerRef;
  selectedToppings!: string[];
  toppings!: string[];
  cart!: Cart;
 
  instructionssArray = new FormArray([new FormControl('', Validators.required)]);
  constructor(private formbuilder:FormBuilder, private cartService: CartService, private toppingservice:ToppingService) {
  
    this.setCart();
   }

  ngOnInit(): void {

}
setCart(){
  this.cart = this.cartService.getCart();
}
removeFromCart(cartItem: CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart();
}
changeQuantity(cartItem:CartItem, quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id, quantity);
  this.setCart();
}
addInputControl(){
  this.instructionssArray.push(new FormControl('', Validators.required))
}
removeInputControl(idx: number){
  this.instructionssArray.removeAt(idx);
}
}
