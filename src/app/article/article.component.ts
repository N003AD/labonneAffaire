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
 ImageArticle: string = "https://via.placeholder.com/400x250" 
  AltImg : string = "Mon image";
  description: string = "Some quick example text to build on the card title and make up the bulk of the card's content."
  dispo : boolean = true;
 */
@Input() nom!: string;
@Input() prix?: number;
@Input() description?: string;
@Input() ImageArticle?:string;
@Input() AltImg?: string;
@Input() dispo?: boolean;  

@Output() info = new EventEmitter<string>();


  
  NbreLike: number = 0;

  comment: string = "Ceci est un Commentaire";
  ngOnInit(): void {}

  OnLike(){
    this.NbreLike++;
    this.info.emit(`. J'aime bien ce produit: ${this.nom}`);
  }
}
