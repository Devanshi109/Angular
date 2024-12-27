import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../title-color-change/title-color-change.component';

@Component({
  selector: 'app-change-card-style',
  standalone: false,
  
  templateUrl: './change-card-style.component.html',
  styleUrl: './change-card-style.component.css'
})

export class ChangeCardStyleComponent {
  @Input() card! : Card;
  @Output() buttonColor = new EventEmitter();
  handleClick(){
    this.buttonColor.emit(this.card.buttonColor);
  }
}