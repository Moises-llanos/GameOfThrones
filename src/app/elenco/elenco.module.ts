import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Material } from "../ng-material/material.module";
import { ElencoRoutingModule } from "./elenco-routing.module";
import { BuscarComponent } from "./pages/buscar/buscar.component";
import { ListadoComponent } from "./pages/listado/listado.component";
import { PersonajeComponent } from "./pages/personaje/personaje.component";
import { AgregarComponent } from './pages/agregar/agregar.component';


@NgModule({
    declarations: [
        ListadoComponent,
        BuscarComponent,
        PersonajeComponent,
        AgregarComponent
    ],
    exports: [],
    imports: [
        ElencoRoutingModule,
        Material,
        CommonModule
    ],
    providers: []
})

export class ElencoModule {}