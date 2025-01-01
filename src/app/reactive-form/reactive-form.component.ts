import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  articleForm: FormGroup;

  constructor() {
    this.articleForm = new FormGroup({
      titleToAdd: new FormControl('', [Validators.required, Validators.minLength(4)]),
      priceToAdd: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.articleForm.valid) {
      const newTitle = this.articleForm.get('titleToAdd')?.value;
      const newPrice = this.articleForm.get('priceToAdd')?.value;
      console.log('Le titre du produit est:', newTitle);
      console.log('Le prix du produit est:', newPrice);
    } else {
      console.error('Le formulaire est invalide. Veuillez remplir tous les champs correctement.');
    }
  }
}
