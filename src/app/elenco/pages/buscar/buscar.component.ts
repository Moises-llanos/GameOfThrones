import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Personaje } from '../../interfaces/elenco-interface';
import { ElencoService } from '../../services/elenco.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {


  personaje!: Personaje
  listPersonajes: Personaje[] = [];
  termino: string = '';
  constructor(private service: ElencoService, 
              private router: Router) { }

  ngOnInit(): void {

    
  }


  sugerenciasPersonajes(){
    this.service.filtrarPersonaje(this.termino.trim())
    .subscribe(personajes=> this.listPersonajes = personajes)
  }


  verOpcionSelecionada(event: MatAutocompleteSelectedEvent){
    if(event.option.value.length == 0) return;


    const personaje = event.option.value;
    this.termino = personaje.fullName


    this.service.getPersonajeById(personaje.id)
    .subscribe(personaje=> this.personaje = personaje)

  }

  volverListado(){
    this.router.navigate(['home/listado'])
  }

  
}
