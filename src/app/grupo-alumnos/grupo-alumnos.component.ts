import { Component, OnInit } from '@angular/core';
import {DataService} from "../Service/data.service";
import {grupo} from'../interface/grupo'
import {Router} from "@angular/router";
@Component({
  selector: 'app-grupo-alumnos',
  templateUrl: './grupo-alumnos.component.html',
  styleUrls: ['./grupo-alumnos.component.css']
})
export class GrupoAlumnosComponent implements OnInit {
  alumnos:Array<any>=[];
  grupos:grupo[]=[];
  materias:any[]=[];
  grupoSeleccionado:number|undefined;
  constructor(private service:DataService, private router:Router) { }

  ngOnInit(): void {
    this.service.getGrupos().subscribe(
      r=>{
          this.grupos=r;
      },
      error=>{
        console.log(error);
      }
    )
  }


  //Metodo para cargar la tabla de alumnos por grupos
  cargarAlumnosMaterias(idGrupo:number|undefined):void{
      this.grupoSeleccionado=idGrupo;
      this.service.getGrupos().subscribe(
        r=>{
            this.grupos=r;
        },
        error=>{
          console.log(error);
        }
      )
      if(this.grupoSeleccionado){
        this.service.ObtenerAlumnoPorGrupo(this.grupoSeleccionado).subscribe(
          r=>{
            this.alumnos=r;
          },
          error=>{
            console.log(error);
          }
        );
        this.service.ObtenerMateriaPorGrupo(this.grupoSeleccionado).subscribe(
          r=>{
              this.materias=r;
          },
          error=>{
            console.log(error);
          }
        )
      }
  }

  modificar(id:number):void{
      this.router.navigateByUrl("/alumnos/"+id);
  }
  eliminar(id:number):void{
    this.service.eliminarAlumno(id).subscribe(
      r=>{
        alert("Alumno eliminado");
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    )
  }
}
