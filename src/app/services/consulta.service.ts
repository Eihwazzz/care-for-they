import { Injectable } from '@angular/core';
import { Plato } from '../models/plato';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  platos: Plato[] = [
    {
      nombre: "Wok de vegetales",
      descripcion: "Salteado de verduras",
      imagen: "assets/img/plato/wokvegetales.jpg",
      precio: 10.50,
      ingredientes: [
        {
          nombre: "Cebolla",
          imagen: "assets/img/ingrediente/cebolla.jpg"
        },
        {
          nombre: "Zanahoria",
          imagen: "assets/img/ingrediente/zanahoria.jpg"
        }
      ]
    }
  ];

  constructor() { }

  getPlatos(){
    return of(this.platos);
  }

}
