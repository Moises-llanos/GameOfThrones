import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from '../../interfaces/elenco-interface';
import { ElencoService } from '../../services/elenco.service';
import { switchMap, tap  } from 'rxjs/operators';

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
              private service: ElencoService, 
              private activedRouted: ActivatedRoute) { }

  ngOnInit() {
    if(this.router.url == '/home/agregar') return;
    this.activedRouted.params
    .pipe(switchMap(({id})=> this.service.getPersonajeById(id)),
    tap(res=> console.log(res)))
    .subscribe((personaje:Personaje) => this.personaje = personaje)

  }

  volverListado(){
    this.router.navigate(['home/listado'])
  }

  guardar(){
    if(this.personaje.firstName.length === 0) return;

    if(this.personaje.id || this.personaje.id == 0){
      this.service.actualizarPersonaje(this.personaje)
      .subscribe(res=> {
        console.log('Actualizado Perfectamente');
        this.router.navigate(['home/actor/', this.personaje.id])
      })
    }else {
      console.log(this.personaje.firstName.length)
      this.service.crearPersonaje(this.personaje)
      .subscribe(personaje=> console.log(personaje))
      this.router.navigate(['home/listado'])
    }
  }


  eleminarPersonaje(){
    this.service.eliminarPersonaje(this.personaje.id!)
    .subscribe(res=> {
      this.router.navigate(['listado'])
    })
  }

}
