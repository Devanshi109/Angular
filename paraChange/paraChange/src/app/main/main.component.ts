import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,

  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  items = [
    {
      color: 'red',
      title: 'Devanshi',
      content: 'AngularJS is a popular open-source framework that simplifies web development by creating interactive single-page applications (SPAs). Unlike traditional websites that load new pages for each click, SPAs offer a smoother user experience by updating content on the same page. AngularJS makes this possible by transforming static HTML into dynamic content that adapts to user interactions. Features like data binding and dependency injection streamline development, saving you time and effort. With regular updates and a large community, AngularJS ensures your web applications stay modern and efficient. Features like data binding and dependency injection streamline development, saving you time and effort. With regular updates and a large community, AngularJS ensures your web applications stay modern and efficient.'
    },
    {
      color: 'blue',
      title: 'Hetvi',
      content: 'AngularJS was first developed in 2008-2009 by Miško Hevery and Adam Abrons at Brat Tech LLC. Its original purpose was to provide software for an online JSON storage service and simplify the development of enterprise applications that were valued by the megabyte. Currently, AngularJS is maintained by Google. Version 1.6, which introduced the concept of component-based application architecture, was the first release. This version removed the Sandbox, which was responsible for security, despite the fact that it had several vulnerabilities that could bypass it. This version removed the Sandbox, which was responsible for security, despite the fact that it had several vulnerabilities that could bypass it. Features like data binding and dependency injection streamline development, saving you time and effort. With regular updates and a large community, AngularJS ensures your web applications stay modern and efficient.'

    },
    {
      color: 'green',
      title: 'Tanmay',
      content: 'The AngularJS module defines the functionality of the application which is applied on the entire HTML page. It helps to link many components. So it is just a group of related components. It is a container that consists of different parts like controllers, services, and directives. These modules should be made in normal HTML files like index.html and no need to create a new project in VisualStudio for this section. The AngularJS module defines the functionality of the application which is applied on the entire HTML page. It helps to link many components. So it is just a group of related components. It is a container that consists of different parts like controllers, services, and directives. These modules should be made in normal HTML files like index.html and no need to create a new project in VisualStudio for this section.'

    },
    {
      color: 'orange',
      title: 'Jay',
      content: 'Angular provides a function Data Binding which helps us to have an almost real-time reflection of the input given by the user i.e. it creates a connection between Model and View. Data Binding is a way to synchronize the data between the model and view components automatically. AngularJS implements data-binding that treats the model as the single-source-of-truth in your application & for all the time, the view is a projection of the model. Unlike React, angular supports two-way binding. In this way, we can make the code more loosely coupled. Data binding can be categorized into 2 types, ie., One-way Binding & Two-way Binding. In this way, we can make the code more loosely coupled. Data binding can be categorized into 2 types, ie., One-way Binding & Two-way Binding.'
    },
  ];

  selectedItem = this.items[0];

  selectItem(item: any) {
    this.selectedItem = item;
  }

}
