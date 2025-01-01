import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  standalone: false,
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.css'
})
export class AjouterComponent implements OnInit {
  TitleToAdd: string = '';
  PriceToAdd: string = '';
  message: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newTitle = this.TitleToAdd;
      const newPrice = this.PriceToAdd;
      console.log(`New Title: ${newTitle}`);
      console.log(`New Price: ${newPrice}`);

      // Reset the form fields
      this.TitleToAdd = '';
      this.PriceToAdd = '';
      form.resetForm();

      // Show success message
      this.message = 'L\'article a été ajouté avec succès.';
    } else {
      this.message = 'Veuillez remplir tous les champs.';
    }
  }
}