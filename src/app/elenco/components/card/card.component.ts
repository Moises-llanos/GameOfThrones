import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Personaje } from "../../interfaces/elenco-interface";

@Component({
    selector: 'app-card',
    templateUrl: '../card/card.component.html',
    styleUrls: ['../card/card.component.scss']
})


export class CardComponent implements OnInit {

    @Input() personaje!: Personaje
    constructor(private router: Router){}

    ngOnInit() {
        
    };

    volverListado(){
        this.router.navigate(['home/listado'])
      }


}