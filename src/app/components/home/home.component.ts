import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { Plato } from 'src/app/models/plato';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mobileQuery: MediaQueryList;
  platos: Plato[];
  menus: Menu[];

  //fillerNav = Array.from({length: 50}, (_, i) => `Menú ${i + 1}`);
  fillerNav = [
    {
      id: 1,
      descripcion: 'Platos'
    },
    {
      id: 2,
      descripcion: 'Menús'
    }
  ];

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private consultaService: ConsultaService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit() {
    
  }

  showList(id : number){
    if(id == 1){
      this.menus = null;
      this.consultaService.getPlatos()
        .subscribe( data => {
          this.platos = data;
        });
    }
    if(id == 2){
      this.platos = null;
    }
  }

}
