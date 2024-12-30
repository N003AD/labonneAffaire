import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'SnapFace';
  message: string = " ";
  listeArticle: any = [];

  constructor(private dataService: DataService){

  }

  ngOnInit(){
    this.listeArticle = this.dataService.listeArticles;
  }
  onAffiche(arg: string) {
    console.log('Vous avez cliqué sur le produit :'+ arg);
    return this.message = "Vous avez cliqué sur un produit" + arg;
  }

}
