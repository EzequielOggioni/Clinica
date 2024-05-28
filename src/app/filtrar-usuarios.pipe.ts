import { Pipe, PipeTransform } from '@angular/core';
import { User } from './entidades/usuario';

@Pipe({
  name: 'filtrarUsuarios',
  standalone: true
})
export class FiltrarUsuariosPipe implements PipeTransform {

  transform(value: Array<User>, filtro: string): Array<User> {
    
    return value.filter( t=> t.apellido.toLowerCase().indexOf(filtro.toLowerCase()) > -1 ||  t.nombre.toLowerCase().indexOf(filtro.toLowerCase()) > -1     );

  }

}
