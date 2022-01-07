

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuth } from '../interfaces/auth.interfaces';
import {tap} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})

export class AuthServices {

    private _baseUrl: string = environment.login
    private auth!: IAuth;

    get Auth(): IAuth{
        return {...this.auth}
    }

    constructor(private http: HttpClient){}


    getUsersLogin():Observable<IAuth>{
        return this.http.get<IAuth>(`${ this._baseUrl }/2`)
        .pipe(tap(res=> {
            this.auth = res;
        }))
    }

}