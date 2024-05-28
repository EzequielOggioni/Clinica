import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { UsuarioService } from './servicios/usuario.service';

export const usuariologueadoGuard: CanActivateFn = (route, state) => {
  
  var usServ =inject(UsuarioService);
  return usServ.estoyLogueado();
};

export const usuariodeslogueadoGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  
  var usServ =inject(UsuarioService);
  return usServ.estoyLogueado();
};
