import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {

  constructor(public basketService: BasketService, public authService: AuthService) { }

  ngOnInit(): void {
  }

}
