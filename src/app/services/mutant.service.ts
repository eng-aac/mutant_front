import { Injectable } from '@angular/core';
import { Species } from '../model/species';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MutantService {

  miUrl: string = 'http://localhost:8013/api/vf/mutants/';

  constructor(private http: HttpClient) { }
  
  //este método debe llamar a la funcion getAll del controller-spring
  getAll(): Observable<Species[]>{
    return this.http.get<Species[]>(this.miUrl);
  }

  //este método llama a la funcion getOne del controller-spring pasando por el parametro id
  getOne(id:number): Observable<Species>{
    return this.http.get<Species>(this.miUrl+id);
  }

  //debe llamr al método de la función controller-spring sin pasar una id, sólo debe pasar los datos de la persona
  post(species:Species): Observable<Species>{
    return this.http.post<Species>(this.miUrl, species);
  }

  // debe llamar a la funcion put pasando del controler pansadole la id y en la url y el body
  update(id:number, species: Species): Observable<Species>{
    return this.http.put<Species>(this.miUrl + id, species);
  }

  //debe llamar a la funcion delete de controlar panadole como parametro el id
    delete(id:number): Observable<any>{
    return this.http.delete(this.miUrl + id);
  }

}
