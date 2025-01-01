import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'SnapFace';
  secondes: number = 0;

  ngOnInit(){
    // Création d'un compteur qui se met à jour à chaque seconde (1000 millisecondes)
    const compteur = interval(1000);
    compteur.subscribe({
      next: (v) => this.secondes = v,
      error: (e) => console.error(e),
      complete: () => console.info('Compteur terminé')
    })
  }
}
