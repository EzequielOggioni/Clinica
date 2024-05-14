import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../entidades/usuario';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public usuario: User = { nombre: '', password: '', mail: '', usuario:'', apellido: '', nacimiento: new Date() };

  constructor(private route: Router, private usuarioservices: UsuarioService) {

    if (usuarioservices.estoyLogueado()) {
      this.route.navigateByUrl('/principal/bienvenida')
    }

  }

  public login() {
    //cargamos la lista desde el Local Storage  

    // //verificamos credenciales
    // if (this.usuarioservices.listaUsuario.filter(t => t.nombre.toLowerCase() == this.usuario.nombre.toLowerCase() &&
    //   t.password == this.usuario.password).length == 1) {
    //   ///guadamos usuario logueado
    //   localStorage.setItem('usuarioLogueado', JSON.stringify(
    //     this.usuarioservices.listaUsuario.filter(t => t.nombre.toLowerCase() == this.usuario.nombre.toLowerCase() &&
    //       t.password == this.usuario.password)[0])
    //   )
    // }


    this.usuarioservices.loginEnApi(this.usuario).subscribe(
      x=> {
        
        if((<User>x).usuario  != null)
        {
          this.usuarioservices.setLogueadoXApi(<User>x);

          //pasar a la pagina de bienvenida
          this.route.navigateByUrl('/principal/bienvenida');
        }
      }

    )

  }

  public prueba() {
    this.usuarioservices.mostrarAPi().subscribe(t =>
      this.probando = (<any>t).mensaje
    )
  }
  public probando: string = "";
}
