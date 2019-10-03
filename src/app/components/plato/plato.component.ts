import { Component, OnInit, Input } from '@angular/core';
import { Plato } from 'src/app/models/plato';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {

  @Input() platoList: Plato[];
  platos: Plato[];

  constructor() { 
    
  }

  ngOnInit() {
    this.platos = this.platoList;
    console.log(this.platoList);
  }

}
