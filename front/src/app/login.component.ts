import { Component } from '@angular/core';

@Component({
  selector: 'my-login',
  template: `
    <h2>{{name}}</h2>
    <hr />
    <section class="panel-content">
      <aside class="left-banner-panel">
        <h2>Bem-vindo a BE3 Health tech</h2>
        <p>Temos o conjunto de soluções mais completo do mercado</p>
        <p>Confirmaçãao de consultas</p>
        <p>A tecnologia que seu hospital esperava e a agilidade que seus pacientes merecem</p>
      </aside>
      <aside class="right-panel-login">
        <div class="content-form">
          <h2>LOGIN PACIENTE</h2>
        </div>
      </aside>      
    </section>
  `,
  styles: [`
    .panel-content {
      height: 80vmin;
      border: 2px solid yellow;
    }

    .left-banner-panel {
      float: left;
      width: 50%;
    }

    .right-panel-login {
      float: right;
      width: 50%;
      height: 100%;
      text-align: center;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .content-form {
      border: 2px solid red;
      justify-content: center;
    }

  `]
})

export class LoginComponent { 
  title = 'home'; 
}
