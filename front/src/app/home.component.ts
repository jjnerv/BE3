import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  template: `
    <h2>{{name}}</h2>
    <p>Conteúdo da Home</p>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
    }
      
  `]
})

export class HomeComponent { 
  title = 'home'; 
}
