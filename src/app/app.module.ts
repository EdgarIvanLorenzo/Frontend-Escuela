import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { GrupoComponent } from './grupo/grupo.component';
import { MateriaComponent } from './materia/materia.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { GrupoAlumnosComponent } from './grupo-alumnos/grupo-alumnos.component';
import { CargaMateriasComponent } from './carga-materias/carga-materias.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    GrupoComponent,
    MateriaComponent,
    GrupoAlumnosComponent,
    CargaMateriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
