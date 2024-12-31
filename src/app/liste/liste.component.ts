import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste',
  standalone: false,
  
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit {

  message: string = "";
  listeArticle : any = [];

  constructor(private dataService: DataService){}
  ngOnInit(): void {
      this.listeArticle = this.dataService.listeArticles;
      console.log(this.listeArticle);
  }
  onAffiche(args:string) {
    console.log('Vous avez cliqué sur le produit :'+ args);
    return this.message = "Vous avez cliqué sur le produit:" + args;
  }
}

