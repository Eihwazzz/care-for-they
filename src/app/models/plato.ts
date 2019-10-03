import { Ingrediente } from './ingrediente';

export class Plato {
    nombre:string;
    descripcion:string;
    imagen:string;
    precio:number;
    ingredientes:Ingrediente[];
}