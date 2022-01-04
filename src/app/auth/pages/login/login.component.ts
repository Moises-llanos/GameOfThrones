import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "src/app/elenco/interfaces/elenco-interface";
import { ElencoService } from "src/app/elenco/services/elenco.service";


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

    constructor(private service: ElencoService,
        private router: Router){};

    ngOnInit(): void {
        
        
        
    }

    getUsersByEmail(email: string){
        this.service.getUsersDataBase()
        .subscribe(users=> {
            const user = users.find(user=> user.email === email);
            if(!user){
                this.error = true;
            }else {
                this.users = user;
                this.router.navigate(['listado'])
            }
        })

        this.email = '';
    }

    limpiarError(){
        this.error = false
    }
    
}