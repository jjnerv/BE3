import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header class="header-wrap">
      <h1 class="logo">{{title}}</h1>
      <nav class="nav-header">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/pacientes" routerLinkActive="active">Pacientes</a>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .header-wrap {
      display: inline-block;
      width: 100%;
      // border: 2px solid red;
    }

    .logo {
      float: left;
      background-image: url('https://www.be3.co/wp-content/uploads/2019/08/logo-site.png');
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      font-size: .1em;
      width: 150px;
      height: 100px;
    }
 
    .nav-header {
      float: none;
      float: right;
      display: inline-block;
    }

    .nav-header a {
      margin: 0 20px;
      color: #D9D9D9;
      line-height: 99px;
      text-decoration: none;
    }

  `]
})
export class AppComponent { 
  title = 'BE3'; 
}
