import { Component, OnInit } from '@angular/core';
import { FoodService } from '../shared/food/food.service';
import { Food } from 'src/app/shared/models/food';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];

  constructor(private foodservice:FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodservice.getAllImg()
  }

}
