import { Component, OnInit } from '@angular/core';
import {grupo} from "../interface/grupo";
import {DataService} from "../Service/data.service";
import {parse} from "@angular/compiler/src/render3/view/style_parser";

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  id:number|undefined=0;
  datos:grupo={
    Grado:0,
    Grupo:""
  }
  alert:boolean=false;
  creado:boolean=false;
  mostrarButtonModificar:boolean=false;

  grupoSeleccion:string='';
  gradoSeleccion:string="";

  //rreglo para la representacion de los select y option
  grupo:Array<string>=["A","B","C","D","E","F","G","H"];
  grado:Array<string>=["1","2","3"];

  grupos:Array<grupo>=[];


  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getGrupos().subscribe(
      r=>{
        this.grupos=r;
        console.log(this.grupos);
      },
      error => {
        console.log(error);
      }
    )
  }

  agregarGrupo():void{
    this.service.subirGrupo(parseInt(this.gradoSeleccion),this.grupoSeleccion).subscribe(
      r=>{
          alert("Grupo añadido");
          window.location.reload();
      },
      error=>{
        console.log(error);
      }
    )
  }
  modificar():void{
    this.service.modificarGrupo(parseInt(this.gradoSeleccion),this.grupoSeleccion,this.id).subscribe(
      r=>{
        alert("Grupo Modificado");
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    )
  }

  mostrarButton(id:number|undefined,grado:number,grupo:string):void{
    this.id=id;
    this.datos.Grado=grado;
    this.datos.Grupo=grupo;
    this.mostrarButtonModificar=true;
    this.grupoSeleccion=grupo;
    this.gradoSeleccion=grado.toString();
  }

  eliminar(id:number|undefined):void{
    if(id){
      this.service.eliminarGrupo(id).subscribe(
        r=>{
          alert("Grupo Eliminado");
          window.location.reload();
        },
        error=>{
          console.log(error);
        }
      )
    }
  }
}
