import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../shared/food/Cart.service';
import { FoodService } from '../shared/food/food.service';
import { Food } from '../shared/models/food';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {


food!:Food;

  constructor(private formbuilder:FormBuilder, private activatedRoute:ActivatedRoute, private foodService:FoodService, private cartservice:CartService, private router:Router) {

    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food = foodService.getFoodById(params['id'])
    })
   }

  ngOnInit(): void {
    
}


addToCart(){
      
  this.cartservice.addToCart(this.food);
  this.router.navigateByUrl('/cart-page')
}


}
