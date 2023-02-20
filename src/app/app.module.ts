import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LOGOPRINCIPALComponent } from './components/logoprincipal/logoprincipal.component';
import { FondoComponent } from './components/fondo/fondo.component';
import { IntroComponent } from './components/intro/intro.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { Cir1Component } from './components/cir1/cir1.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FinComponent } from './components/fin/fin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LOGOPRINCIPALComponent,
    FondoComponent,
    IntroComponent,
    ExperienciaComponent,
    EducacionComponent,
    Cir1Component,
    ProyectosComponent,
    FinComponent
    
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
