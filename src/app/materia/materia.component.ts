import { Component, OnInit } from '@angular/core';
import {DataService} from "../Service/data.service";
import{materia} from "../interface/materia";

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
  nombreMateria:string;
  id:number=0;
  materias:materia[]=[];
  titleButton:string="Agregar";
  modificarB:boolean=false;
  constructor(private service:DataService) {
    this.nombreMateria='';

  }

  ngOnInit(): void {
    this.service.getMateria().subscribe(
      response=>{
        this.materias=response;
      },
      error=>{
        console.log(error);
      }
    )
  }

  agregarMateria():void{
    this.service.subirMateria(this.nombreMateria).subscribe(
      r=>{
        console.log(r);
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    )
  }
  //Todo Modificar
  mostrarButton(id:number,nombreMateria:string):void{
    this.nombreMateria=nombreMateria;
    this.id=id;
    this.modificarB=true;
    console.log(this.id," "+this.nombreMateria);
  }
  modificar():void{
    this.service.actualizarMateria(this.id.toString(),this.nombreMateria).subscribe(
      r=>{
        alert("Materia Modificado");
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    )
  }
  eliminar(id:number):void{
      this.service.eliminarMateria(id).subscribe(
        r=>{
          alert("Materia eliminada");
          window.location.reload();
        },
        error=>{
          console.log(error);
        }
      )
  }

}
