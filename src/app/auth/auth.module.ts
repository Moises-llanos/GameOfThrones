import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Material } from "../ng-material/material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        AuthRoutingModule,
        Material
    ],
    providers: []
})

export class AuthModule {}