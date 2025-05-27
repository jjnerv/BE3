import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './routes/app-routing.module';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { PacientesComponent } from './pacientes.component';
import { PacienteService } from './services/pacientes.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    PacientesComponent
  ],
  providers: [ PacienteService ],
  bootstrap:    [ 
    AppComponent
   ]
})
export class AppModule { }
