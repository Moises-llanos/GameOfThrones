import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from '../../interfaces/elenco-interface';
import { ElencoService } from '../../services/elenco.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  personaje: Personaje = {
    title: '',
    family: '',
    firstName: '',
    fullName: '',
    image: '',
    imageUrl: '',
    lastName: ''
  }
  constructor(private router: Router, 
              private service: ElencoService) { }

  ngOnInit(): void {
  }

  volverListado(){
    this.router.navigate(['home/listado'])
  }

  guardar(){
    if(this.personaje.firstName.length == 0) return;
     this.service.crearPersonaje(this.personaje)
     .subscribe(personaje=> console.log(personaje))
     this.router.navigate(['home/listado'])
  }

}
