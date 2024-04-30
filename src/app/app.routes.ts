import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ErrorComponent } from './componentes/error/error.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';

export const routes: Routes = [
    {
        path: 'principal', component: PrincipalComponent,
        children:[
            {path:'', component:LoginComponent},
            {path:'registro', component:RegistroComponent},
            {path:'bienvenida', component:BienvenidaComponent}
        ]
    },
    { path: '', redirectTo: 'principal' , pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];
