import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vegetable } from '../models/vegetable';

@Component({
  selector: 'app-note-block',
  templateUrl: './note-block.component.html',
  styleUrls: ['./note-block.component.scss']
})
export class NoteBlockComponent implements OnInit {
  @Input()
  vegetable!: Vegetable;
  @Output()
  deleteVegetable = new EventEmitter<Vegetable>();

  @Output()
  addToBasket = new EventEmitter<Vegetable>();

  @Output()
  removeFromBasket = new EventEmitter<Vegetable>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteVegetableEvent():void{
    this.deleteVegetable.emit(this.vegetable);
  }

  addToBasketEvent():void {
    this.addToBasket.emit(this.vegetable);
  }

  removeFromBasketEvent():void {
    this.removeFromBasket.emit(this.vegetable);

  }
}
