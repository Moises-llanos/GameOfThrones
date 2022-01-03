import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Material } from "../ng-material/material.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";


@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [],
    imports: [
        HomeRoutingModule,
        Material,
        CommonModule
    ],
    providers: []
})

export class HomeModule {}