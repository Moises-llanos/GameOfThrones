import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElencoService } from '../../services/elenco.service';
import { switchMap, tap } from 'rxjs/operators'
import { Personaje } from '../../interfaces/elenco-interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {

  personaje!: Personaje;
  constructor(private service: ElencoService,
              private activedRouted: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {

    this.activedRouted.params
    .pipe(switchMap(({id})=> this.service.getPersonajeById(id)),tap(console.log))
    .subscribe(personaje=> setTimeout(()=>{this.personaje = personaje}, 500))
  }


  volverListado(){
    this.router.navigate(['home/listado'])
  }

}
