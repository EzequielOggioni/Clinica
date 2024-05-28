import { CanDeactivateFn } from '@angular/router';

export const usuariodeslogueadoGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
