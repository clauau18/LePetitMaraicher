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
  vegetableId!: any;
  vegetable!: Vegetable;
  
  constructor(private route: ActivatedRoute, private router: Router, public vegetablesService: VegetablesService) { }

  ngOnInit(): void {
    this.vegetableId = this.route.snapshot.paramMap.get('id');
    this.vegetable = { vegetableName: '', vegetablePrice: 0, vegetableQuantity : "1 kg"};

    this.vegetablesService.getVegetable(this.vegetableId).subscribe(
        (vegetable: Vegetable) => {
          this.vegetable = vegetable;
          console.log('vegetable XXX' + vegetable)
        },
        (error) => {
          console.log('Error');
        }
    );
  }

  updateVegetable(): void{
    this.vegetablesService.updateVegetable(this.vegetable).subscribe(
        (vegetable: Vegetable) => {
          this.router.navigate(['/buying']);
        },
        (error:any) => {
          console.log('Error d update de vegetable');
        }
    );
  }

  saveVegetable():void {
    this.vegetablesService.saveVegetable(this.vegetable);
    this.router.navigate(["/buying"])
  }

}
