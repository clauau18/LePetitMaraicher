import { Component, OnInit } from '@angular/core';
import { VegetablesService} from '../vegetables.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {

  constructor(public vegetablesService: VegetablesService) { }

  ngOnInit(): void {
  }
}
