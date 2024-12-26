import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SnapFace';
  prix1 : number = 150;
  prix2 : number = 250 ;
  prix3 : number = 300;
  prix4 : number = 470;
  prix5 : number = 487;
  message: string = "";

  onAffiche(arg: string) {
    console.log('Vous avez cliqué sur le produit :'+ arg);
    return this.message = "Vous avez cliqué sur un produit" + arg;

  }
}
