import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  standalone: false,
  
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.css'
})
export class AjouterComponent implements OnInit {
TitleToAdd = "";
PriceToAdd = "" ;
message: string = '';

constructor(){}
ngOnInit(): void {
}

onSubmit(form: NgForm):void{
  const newTitle = this.TitleToAdd;
  const newPrice = this.PriceToAdd;
  console.log("New Title: " + newTitle);
  console.log("New Price: " + newPrice);  
  this.message = 'Veuillez remplir tous les champs.';
}

}