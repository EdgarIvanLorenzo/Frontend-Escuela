import { Component, OnInit } from '@angular/core';
import {DataService} from "../Service/data.service";
import {grupo} from "../interface/grupo";
import {materia} from "../interface/materia";

@Component({
  selector: 'app-carga-materias',
  templateUrl: './carga-materias.component.html',
  styleUrls: ['./carga-materias.component.css']
})
export class CargaMateriasComponent implements OnInit {
  item:boolean=false;
  materiasSelecionadas:number[];
  grupos:grupo[]=[];
  materias:materia[]=[];
  grupoElejido:string='';
  constructor(private service:DataService) {
      this.materiasSelecionadas=[];
  }

  ngOnInit(): void {
    this.service.getGrupos().subscribe(
      r=>{
        this.grupos=r;
        this.service.getMateria().subscribe(
          r=>{
            this.materias=r;
          },
          error=>{
            console.log(error);
          }
        )
      },
      error=>{
        console.log(error);
      }
    )

  }

  cambio(materia:number):void{
    this.materiasSelecionadas.push(materia);
    console.log(this.materiasSelecionadas);
  }

  subirMaterias():void{
    this.service.cargaMaterias(parseInt(this.grupoElejido),this.materiasSelecionadas).subscribe(
      r=>{
        alert("Datos actualizados");
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    )
  }

}
