import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../entidades/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  
  
  public usuario:User = {nombre:'', password:'', mail:'', usuario: '', apellido: '', nacimiento: new Date()  };
  public password2:string= '';
  /**
   *
   */
  constructor(private router:Router,private us:UsuarioService ) {
    
  }
  
  validarExiste(){
    return this.us.listaUsuario.filter( 
      t=> t.nombre.toLowerCase() == this.usuario.nombre.toLowerCase()).length == 1 ;
      
    }
    
  //   public registrar(){
  //     this.us.listaUsuario.push(this.usuario);
  //     localStorage.setItem('usuarios', JSON.stringify(this.us.listaUsuario));
  //     this.us.listaUsuario= JSON.parse(JSON.stringify(this.us.listaUsuario)) ;
  //     
  // }
  public registrarEnApi(){
    this.us.registrar(this.usuario).subscribe(
      x =>{ 
       console.log(x);
       this.us.setLogueadoXApi(<User> x);
       this.router.navigateByUrl('/principal');
      }  
     );
  }

}
