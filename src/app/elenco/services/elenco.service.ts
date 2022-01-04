import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IUser, Personaje } from "../interfaces/elenco-interface";


@Injectable({
    providedIn: 'root'
})


export class ElencoService {

    private url: string = environment.baseUrl;
    private login: string = 'http://localhost:3000/users';

    constructor(private http: HttpClient){}


    getAllUsers(): Observable<Personaje[]>{
       return this.http.get<Personaje[]>(this.url)
    }


    getPersonajeById(id: number): Observable<Personaje>{
       return this.http.get<Personaje>(`${this.url}/${id}`)
    }

    filtrarPersonaje(termino: string): Observable<Personaje[]>{

      const params = new HttpParams()
      .set('q', termino)
      .set('_limit', '7')

       return this.http.get<Personaje[]>(this.url, {params})
    }

    getUsersDataBase(): Observable<IUser[]>{
       return this.http.get<IUser[]>(this.login)
    }

    

}