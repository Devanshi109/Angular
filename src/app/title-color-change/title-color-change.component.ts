import { Component } from '@angular/core';

@Component({
  selector: 'app-title-color-change',
  standalone: false,
  
  templateUrl: './title-color-change.component.html',
  styleUrl: './title-color-change.component.css'
})
export class TitleColorChangeComponent {
  cards: Card[] = [
    {
      title: 'Republican need to decide whether they believe in democracy',
      content: 'The Republican Party faces a crucial decision: whether to fully uphold democratic principles like fair elections, peaceful power transitions, and the rule of law. Embracing these values is essential to restoring public trust and preventing further polarization. As internal divisions emerge over these issues, the party must decide whether to fully embrace these foundational values.',
      buttonColor: 'blue',
    },
    {
      title: 'Current and former Trump officials quietly reach out to Biden team',
      content: 'Current and former Trump officials reportedly reaching out to the Biden administration highlight efforts to ensure continuity in governance. These quiet interactions, often focused on areas like national security or economic stability, reflect the pragmatic need for dialogue across partisan lines, despite potential criticism. These quiet interactions, often focused on areas like national security or economic stability.',
      buttonColor: 'black',
    },
    {
      title: 'Republican need to decide whether they believe in democracy',
      content: 'The Republican Party faces a crucial decision: whether to fully uphold democratic principles like fair elections, peaceful power transitions, and the rule of law. Embracing these values is essential to restoring public trust and preventing further polarization. As internal divisions emerge over these issues, the party must decide whether to fully embrace these foundational values. ',
      buttonColor: 'red',
    },
    {
      title: 'Current and former Trump officials quietly reach out to Biden team',
      content: 'Current and former Trump officials reportedly reaching out to the Biden administration highlight efforts to ensure continuity in governance. These quiet interactions, often focused on areas like national security or economic stability, reflect the pragmatic need for dialogue across partisan lines, despite potential criticism. These quiet interactions, often focused on areas like national security or economic stability.',
      buttonColor: 'green',
    },
  ]

  titleColor = "orange";

  handleClick(color: string) {
    this.titleColor = color;
  }

}

export interface Card {
  title: string;
  content: string;
  buttonColor: string;
} 
