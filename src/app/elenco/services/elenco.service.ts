import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Personaje } from "../interfaces/elenco-interface";


@Injectable({
    providedIn: 'root'
})


export class ElencoService {

    private url: string = environment.baseUrl;

    constructor(private http: HttpClient){}


    getAllUsers(): Observable<Personaje[]>{
       return this.http.get<Personaje[]>(this.url)
    }


    getPersonajeById(id: number): Observable<Personaje>{
       return this.http.get<Personaje>(`${this.url}/${id}`)
    }
}