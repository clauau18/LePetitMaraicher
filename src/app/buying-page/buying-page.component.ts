import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { VegetablesService} from '../vegetables.service'


@Component({
  selector: 'app-buying-page',
  templateUrl: './buying-page.component.html',
  styleUrls: ['./buying-page.component.scss']
})
export class BuyingPageComponent implements OnInit {
  
  constructor(public vegetablesService: VegetablesService, public basketService: BasketService) { }

  ngOnInit(): void {
  }

}
