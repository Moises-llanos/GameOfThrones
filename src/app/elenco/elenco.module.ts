import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Material } from "../ng-material/material.module";
import { ElencoRoutingModule } from "./elenco-routing.module";
import { BuscarComponent } from "./pages/buscar/buscar.component";
import { ListadoComponent } from "./pages/listado/listado.component";
import { PersonajeComponent } from "./pages/personaje/personaje.component";
import { AgregarComponent } from './pages/agregar/agregar.component';
import { FormsModule } from "@angular/forms";
import { CardComponent } from "./components/card/card.component";
import { ImagenPipe } from "./pipes/imagen.pipe";


@NgModule({
    declarations: [
        ListadoComponent,
        BuscarComponent,
        PersonajeComponent,
        AgregarComponent,
        CardComponent,
        ImagenPipe
    ],
    exports: [],
    imports: [
        ElencoRoutingModule,
        Material,
        CommonModule,
        FormsModule
    ],
    providers: []
})

export class ElencoModule {}