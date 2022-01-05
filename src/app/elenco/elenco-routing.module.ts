import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarComponent } from "./pages/agregar/agregar.component";
import { BuscarComponent } from "./pages/buscar/buscar.component";
import { ListadoComponent } from "./pages/listado/listado.component";
import { PersonajeComponent } from "./pages/personaje/personaje.component";


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'listado',
                component: ListadoComponent
            },
            {
                path: 'buscar',
                component: BuscarComponent
            },
            {
                path: 'actor/:id',
                component: PersonajeComponent
            },
            {
                path: 'agregar',
                component: AgregarComponent
            },
            {
                path: 'editar/:id',
                component: AgregarComponent
            },
            {
                path: '**',
                redirectTo: 'listado'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ElencoRoutingModule {}