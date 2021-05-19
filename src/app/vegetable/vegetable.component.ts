import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vegetable } from '../models/vegetable';
import { VegetablesService } from '../vegetables.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.scss']
})
export class VegetableComponent implements OnInit {
  vegetableId!: number;
  vegetable!: Vegetable;
  
  constructor(private route: ActivatedRoute, private router: Router, public vegetablesService: VegetablesService) { }

  ngOnInit(): void {
    this.vegetableId = Number(this.route.snapshot.paramMap.get('id'));
    this.vegetable = this.vegetablesService.getVegetable(this.vegetableId);
  }

  saveVegetable():void {
    this.vegetablesService.saveVegetable(this.vegetable);
    this.router.navigate(["/buying"])
  }

}
