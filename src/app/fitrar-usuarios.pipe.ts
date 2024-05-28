import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fitrarUsuarios',
  standalone: true
})
export class FitrarUsuariosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  
}
