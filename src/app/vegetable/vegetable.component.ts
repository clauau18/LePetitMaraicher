import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.scss']
})
export class VegetableComponent implements OnInit {
  //id:number;
  constructor() { }

  ngOnInit(): void {
    //this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

}
