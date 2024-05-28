import { Component, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../entidades/usuario';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { CommonModule } from '@angular/common';
import { FiltrarUsuariosPipe } from "../../filtrar-usuarios.pipe";
import { Turno } from '../../turno';
import { Disponibilidad } from '../../disponibilidad';
import { QuitarusadosPipe } from "../../quitarusados.pipe";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [FormsModule, RouterModule, CommonModule, FiltrarUsuariosPipe, QuitarusadosPipe]
})
export class LoginComponent {

  public turnos: Array<Turno> = [{ Dia: 1, HoraDesde: 10, cantidad: 3 }, { Dia: 3, HoraDesde: 10, cantidad: 2 }]
  public usuairos: Array<User> = [
    {
      "apellido": "Compton",
      "nombre": "Dianna",
      "mail": "diannacompton@austex.com",
      "password": "Hood",
      "usuario": "Kane",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Carney",
      "nombre": "Russell",
      "mail": "russellcarney@austex.com",
      "password": "Cornelia",
      "usuario": "Hurst",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Buckner",
      "nombre": "Pauline",
      "mail": "paulinebuckner@austex.com",
      "password": "Lily",
      "usuario": "Mcdonald",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "English",
      "nombre": "Contreras",
      "mail": "contrerasenglish@austex.com",
      "password": "Jeanine",
      "usuario": "Barrett",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "York",
      "nombre": "Porter",
      "mail": "porteryork@austex.com",
      "password": "Marshall",
      "usuario": "Patel",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Cantrell",
      "nombre": "Gretchen",
      "mail": "gretchencantrell@austex.com",
      "password": "Nicholson",
      "usuario": "Head",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Diaz",
      "nombre": "Lorene",
      "mail": "lorenediaz@austex.com",
      "password": "Martin",
      "usuario": "Nielsen",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Hunter",
      "nombre": "Jeanne",
      "mail": "jeannehunter@austex.com",
      "password": "Peters",
      "usuario": "Lora",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Prince",
      "nombre": "Becker",
      "mail": "beckerprince@austex.com",
      "password": "Whitney",
      "usuario": "Eleanor",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Macias",
      "nombre": "Janette",
      "mail": "janettemacias@austex.com",
      "password": "Goodwin",
      "usuario": "Elisabeth",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Bradford",
      "nombre": "Betsy",
      "mail": "betsybradford@austex.com",
      "password": "Bradford",
      "usuario": "Lucille",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Levine",
      "nombre": "Becky",
      "mail": "beckylevine@austex.com",
      "password": "Beach",
      "usuario": "Marta",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Gonzalez",
      "nombre": "Gardner",
      "mail": "gardnergonzalez@austex.com",
      "password": "Doyle",
      "usuario": "Audrey",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Allison",
      "nombre": "Cora",
      "mail": "coraallison@austex.com",
      "password": "Kemp",
      "usuario": "Claudia",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Harrington",
      "nombre": "Mcneil",
      "mail": "mcneilharrington@austex.com",
      "password": "Hyde",
      "usuario": "Figueroa",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Freeman",
      "nombre": "Jerri",
      "mail": "jerrifreeman@austex.com",
      "password": "Poole",
      "usuario": "Bonnie",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Weiss",
      "nombre": "Brianna",
      "mail": "briannaweiss@austex.com",
      "password": "Sykes",
      "usuario": "Bianca",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Burton",
      "nombre": "Woodward",
      "mail": "woodwardburton@austex.com",
      "password": "Richardson",
      "usuario": "Howell",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Fuller",
      "nombre": "Morgan",
      "mail": "morganfuller@austex.com",
      "password": "Carmella",
      "usuario": "Pena",
      "nacimiento": new Date(20001225)
    },
    {
      "apellido": "Schroeder",
      "nombre": "Delia",
      "mail": "deliaschroeder@austex.com",
      "password": "Curry",
      "usuario": "Mercedes",
      "nacimiento": new Date(20001225)
    }
  ]

  public valorfiltro: string = '';

  public fecha: Date = new Date();

  public usuario: User = { nombre: '', password: '', mail: '', usuario: '', apellido: '', nacimiento: new Date() };

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
      x => {

        if ((<User>x).usuario != null) {
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

  public buscarDisponibles(): Array<Disponibilidad> {
    let i: number;
    let listaTurnos: Array<Disponibilidad> = new Array<Disponibilidad>();
    for (i = 0; i < 14; i++) {
      let fechaActual: Date = new Date();
      fechaActual.setUTCSeconds(0);
      fechaActual.setMinutes(0);
      fechaActual.setMilliseconds(0);
      fechaActual.setHours(0);
      fechaActual.setDate(fechaActual.getDate() + i)

      if (this.turnos.filter(t => t.Dia == fechaActual.getDay()).length > 0) {

        let j: number;

        for (j = 0; j < this.turnos.filter(t => t.Dia == fechaActual.getDay())[0].cantidad; j++) {

          let hora= this.turnos.filter(t => t.Dia == fechaActual.getDay())[0].HoraDesde + j;
          listaTurnos.push(
          {
            fecha: fechaActual,
            hora: hora
          });
        }

      }
    }
     
    return listaTurnos;

  }

  public turnosusados:Array<Disponibilidad> =[ 
    {fecha:new Date('2024-05-29T00:00:00'),hora:11}, 
    {fecha:new Date('2024-05-27T00:00:00'),hora:10}, 
    {fecha:new Date('2024-05-29T00:00:00'),hora:10}  ]
}