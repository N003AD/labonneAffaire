import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeArticles = [
    { 
      id: 1, 
      nom: 'Produit 1', 
      prix: 150 , 
      description: "Un super vélo",
      ImageArticle: "https://via.placeholder.com/400x250",  
      AltImg: "Vélo",
      dispo: true
    },
    {
      id: 2,
      nom: 'Produit 2',
      prix: 250 ,
      description: "Un super scooter",
      ImageArticle: "https://via.placeholder.com/400x250",
      AltImg: "Scooter",
      dispo: false
    },
    {
      id: 3,
      nom: 'Produit 3',
      prix: 300 ,
      description: "Un super moto",
      ImageArticle: "https://via.placeholder.com/400x250",
      AltImg: "Moto",
      dispo: false
    },
    {
      id: 4,
      nom: 'Produit 4',
      prix: 400 ,
      description: "Un super camion",
      ImageArticle: "https://via.placeholder.com/400x250",
      AltImg: "Camion",
      dispo: true
    },
    {
      id: 5,
      nom: 'Produit 5',
      prix: 500 ,
      description: "Un super bateau",
      ImageArticle: "https://via.placeholder.com/400x250",
      AltImg: "Bateau",
      dispo: false
    },
    {
      id: 6,
      nom: 'Produit 6',
      prix: 600 ,
      description: "Un super avion",
      ImageArticle: "https://via.placeholder.com/400x250",
      AltImg: "Avion",
      dispo: true
    }
  ];
  constructor() { }

  getArticles(id: number) {
    const articles = this.listeArticles.find((a) => {
      return a.id == id;
    });
    return articles;
    }
}
