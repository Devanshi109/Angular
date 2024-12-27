import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: false,

  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() title!: string;
  @Input() content!: string;

}
