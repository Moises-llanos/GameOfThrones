import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IAuth } from "../auth/interfaces/auth.interfaces";
import { AuthServices } from "../auth/services/auth.service";
import { Personaje } from "../elenco/interfaces/elenco-interface";
import { ElencoService } from "../elenco/services/elenco.service";


@Component({
    selector: 'app-home',
    templateUrl: '../home/home.component.html',
    styleUrls: ['../home/home.component.scss']
})

export class HomeComponent implements OnInit { 


    get Auth(): IAuth{
       return this.authService.Auth
    }
    
    estadoMenu: boolean = true; 
    constructor(private router: Router, 
                private authService: AuthServices){};


    ngOnInit(): void {
        
    };


    IrLogin(){
        this.router.navigate(['./auth/login'])
    }


    
}