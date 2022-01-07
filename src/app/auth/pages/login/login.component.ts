import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "src/app/elenco/interfaces/elenco-interface";
import { ElencoService } from "src/app/elenco/services/elenco.service";
import { AuthServices } from "../../services/auth.service";


@Component({
    selector: 'app-login',
    templateUrl: '../login/login.component.html',
    styleUrls: ['../login/login.component.scss']
})

export class LoginComponent implements OnInit {
    
    @ViewChild('email') onEmail!: ElementRef<HTMLInputElement>
    email: string = ''
    users: any
    error: boolean = false;

    constructor(private service: AuthServices,
        private router: Router){};

    ngOnInit(): void {
        
        
        
    }

    getUsersByEmail(){
        this.service.getUsersLogin()
        .subscribe(users=> {
            this.users = users;
            this.router.navigate(['./listado'])
        })

        this.email = '';
    }

    limpiarError(){
        this.error = false
    }
    
}