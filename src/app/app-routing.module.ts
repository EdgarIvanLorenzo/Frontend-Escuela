import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MateriaComponent} from "./materia/materia.component";
import {GrupoComponent} from "./grupo/grupo.component";
import {AlumnoComponent} from "./alumno/alumno.component";
import {GrupoAlumnosComponent} from "./grupo-alumnos/grupo-alumnos.component";
import {CargaMateriasComponent} from "./carga-materias/carga-materias.component";

const routes: Routes = [
  {path:"materia",component:MateriaComponent},
  {path:"grupos",component:GrupoComponent},
  {path:"alumnos/:id",component:AlumnoComponent},
  {path:"grupoAlumnos",component:GrupoAlumnosComponent},
  {path:"cargaMaterias",component:CargaMateriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
