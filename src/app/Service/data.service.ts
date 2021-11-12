import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {grupo} from "../interface/grupo";
import {alumno} from "../interface/alumno";
import {materia} from "../interface/materia"
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  //Materia
  //Post
  subirMateria(nombre:string):Observable<any>{
    const datos={
      nombre:nombre
    }
    return this.http.post("http://localhost:3525/Addmateria",datos);
  }
  //Get
  getMateria():Observable<any>{
    return this.http.get("http://localhost:3525/Allmaterias");
  }
  //Update
  actualizarMateria(id:string,nombre:string):Observable<any>{
    const datos={
      nombre:nombre
    }
    return this.http.put("http://localhost:3525/UpdateMateria/"+id,datos);
  }
  eliminarMateria(id:number):Observable<any>{
    return this.http.delete("http://localhost:3525/Deletemateria/"+id);
  }


  //Grupos
  getGrupos():Observable<any>{
    return this.http.get("http://localhost:3525/Allgrupos");
  }
  subirGrupo(grado:number,grupo:string):Observable<any>{
    const datos={
      grado:grado,
      grupo:grupo,
    }
    return this.http.post("http://localhost:3525/Addgrupo",datos);
  }
  modificarGrupo(grado:number,grupo:string,id:number|undefined):Observable<any>{
    const datos2={
      grado:grado,
      grupo:grupo
    }
    return this.http.put("http://localhost:3525/Updategrupo/"+id,datos2);
  }
  eliminarGrupo(id:number):Observable<any>{
    return this.http.delete("http://localhost:3525/Deletegrupo/"+id);
  }

  //Todo Alumnos
  agregarAlumnos(datos:alumno):Observable<any>{
    return this.http.post("http://localhost:3525/Addalumno",datos);
  }
  ObtenerAlumno(id:number):Observable<any>{
    return this.http.get("http://localhost:3525/ObtenerAlumno/"+id);
  }
  actualizarAlumno(id:number,datos:any):Observable<any>{
    return this.http.put("http://localhost:3525/Updatealumno/"+id,datos);
  }
  eliminarAlumno(id:number):Observable<any>{
    return this.http.delete("http://localhost:3525/Deletealumno/"+id);
  }

  //Todo Carga Materias
  cargaMaterias(idGrupo:number,materias:number[]):Observable<any>{
    const datos={
        grupo:idGrupo,
        materia:materias
    }
    return this.http.post("http://localhost:3525/Cargamaterias",datos);
  }


  //Todo ultima vista
  ObtenerAlumnoPorGrupo(id:number):Observable<any>{
    return this.http.get("http://localhost:3525/Lista/"+id);
  }
  ObtenerMateriaPorGrupo(id:number):Observable<any>{
    return this.http.get("http://localhost:3525/ListaMateria/"+id);
  }
}
