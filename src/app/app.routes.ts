import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ErrorComponent } from './componentes/error/error.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { usuariodeslogueadoGuard, usuariologueadoGuard } from './usuariologueado.guard';

export const routes: Routes = [
    {
        path: 'principal', component: PrincipalComponent,
        children:[
            {path:'login', component:LoginComponent, canDeactivate: [usuariodeslogueadoGuard]},
            {path:'registro', component:RegistroComponent, canActivate: [usuariologueadoGuard,usuariodeslogueadoGuard]},
            {path:'bienvenida', component:BienvenidaComponent},
            {path:'**', component:LoginComponent}
        ]
    },
    { path: '', redirectTo: 'principal' , pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];


