import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  standalone: false,
  
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

id!: number ;
nomArticle!: string ;
prixArticle!: number ;
descriptionArticle!: string ;
UrlImg!: string;

constructor(private dataService: DataService, private route: ActivatedRoute) { }

 ngOnInit(): void {
  const id = this.route.snapshot.params["id"];
  this.id = id;
  this.nomArticle = this.dataService.getArticles(id)!.nom;
  this.prixArticle = this.dataService.getArticles(id)!.prix;
  this.UrlImg = this.dataService.getArticles(id)!.ImageArticle;
  console.log(this.nomArticle);
 }
}
