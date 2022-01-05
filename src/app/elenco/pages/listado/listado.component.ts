import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/elenco-interface';
import { ElencoService } from '../../services/elenco.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listadoActores: Personaje[] = [];
  estadoButon: boolean = true;


  constructor(private service: ElencoService) { }

  ngOnInit(): void {

    this.getAllUsers()
  }

  getAllUsers(){
    this.service.getAllUsers()
    .subscribe(actores=> {

      this.listadoActores = actores;
      this.listadoActores = this.listadoActores.splice(0, 5)
    })
}

  verMas(){
    this.service.getAllUsers()
    .subscribe(actores=> {
      this.estadoButon = false;

      setTimeout(()=> {
        this.listadoActores = actores;
      }, 500)
    })
  }

}
