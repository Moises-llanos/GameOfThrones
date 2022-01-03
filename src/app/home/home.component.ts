import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Personaje } from "../elenco/interfaces/elenco-interface";
import { ElencoService } from "../elenco/services/elenco.service";


@Component({
    selector: 'app-home',
    templateUrl: '../home/home.component.html',
    styleUrls: ['../home/home.component.scss']
})

export class HomeComponent implements OnInit { 


    
    estadoMenu: boolean = true; 
    constructor(private service: ElencoService, 
                private router: Router){};


    ngOnInit(): void {
        
    };


    IrLogin(){
        this.router.navigate(['./auth/login'])
    }


    
}