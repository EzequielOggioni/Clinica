import { Pipe, PipeTransform } from '@angular/core';
import { Disponibilidad } from './disponibilidad';

@Pipe({
  name: 'quitarusados',
  standalone: true
})
export class QuitarusadosPipe implements PipeTransform {

  transform(value: Array<Disponibilidad>,  usados :Array<Disponibilidad>): Array<Disponibilidad> 
  {
    return value.filter(t=> !usados.some(q=> q.fecha.toJSON() == t.fecha.toJSON() && q.hora == t.hora) );
  }

}
