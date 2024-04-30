import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() {
    this.listaUsuario = JSON.parse(localStorage.getItem('usuarios') || '[]');
     this.setLogueado()
  }

  public usuarioLogueado: Usuario = { nombre: '', password: '', mail: '' };

  public listaUsuario: Usuario[] = [];

  public estoyLogueado() :boolean{
    return this.usuarioLogueado.nombre != '';
  }

  public setLogueado(){
    if (localStorage.getItem('usuarioLogueado') ?? '' != '')
      this.usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado') ?? '');
  }

}
