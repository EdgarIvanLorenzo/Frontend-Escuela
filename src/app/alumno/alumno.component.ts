import { Component, OnInit } from '@angular/core';
import {alumno} from "../interface/alumno";
import {grupo} from "../interface/grupo";
import {DataService} from "../Service/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  id:number=0;
  grupos:grupo[]=[]
  mostrar:boolean=false;
  alumno:alumno={
    nombre:'',
    apellidos:'',
    telefono:'',
    direccion:'',
    genero:'',
    idGrupo:0
  }
  genero:string[]=["Hombre","Mujer"];
  generoSeleccionado:string;


  constructor(private service:DataService, private params:ActivatedRoute) {
    this.generoSeleccionado='';
  }

  ngOnInit(): void {
    this.params.params.subscribe(
      r=>{
        this.id=r.id;
        if(r.id!==0){
          this.service.ObtenerAlumno(r.id).subscribe(
            r1=>{
              this.alumno.nombre=r1[0].Nombre;
              this.alumno.apellidos=r1[0].Apellidos;
              this.alumno.direccion=r1[0].Direccion;
              this.alumno.genero=r1[0].Genero;
              this.alumno.telefono=r1[0].Telefono;
              this.mostrar=true;
            },
            error=>{
              console.log(error);
            }
          )
        }
      },
      error=>{
        console.log(error);
      }
    )
    this.service.getGrupos().subscribe(
      r=>{
        this.grupos=r;
        console.log(this.grupos);
      },
      error=>{
        console.log(error);
      }
    )
  }

  agregaAlumno():void{
    this.service.agregarAlumnos(this.alumno).subscribe(
      r=>{
        alert("Alumno agregado");
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    )
  }

  modificar():void{
    this.service.actualizarAlumno(this.id,this.alumno).subscribe(
      r=>{
          alert("Alumno Actualizado");
          window.location.reload();
      },
      error=>{
        console.log(error);
      }
    )
  }
}
