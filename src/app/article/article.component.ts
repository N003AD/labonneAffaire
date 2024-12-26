import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: false,
  
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  /* title: string = "Mon Article";
  prixArticle: number = 150;
  */
 ImageArticle: string = "https://via.placeholder.com/400x250" 
@Input() titreArticle!: string;
@Input() prixArticle?: number;
@Output() info = new EventEmitter<string>();

  AltImg : string = "Mon image";

  description: string = "Some quick example text to build on the card title and make up the bulk of the card's content."
  
  NbreLike: number = 0;

  comment: string = "Ceci est un Commentaire";
  dispo : boolean = true;
  ngOnInit(): void {}

  OnLike(){
    this.NbreLike++;
    this.info.emit(`. J'aime bien ce produit: ${this.titreArticle}`);
  }
}
