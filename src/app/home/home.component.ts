import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../_services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../_services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../_services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishService: DishService, private promoService: PromotionService, private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe((dish) => this.dish = dish);
    this.promoService.getFeaturedPromotion().subscribe((dish) => this.promotion = dish);
    this.leaderService.getFeaturedLeader().subscribe((dish) => this.leader = dish);
  }

}
