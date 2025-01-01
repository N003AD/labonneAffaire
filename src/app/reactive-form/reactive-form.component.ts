import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
  titleToAdd = new FormControl(' ');
  priceToAdd = new FormControl(' ');

  ngOnInit(): void {
      
  }

  onSubmit(form: NgForm){
    const newTitle = this.titleToAdd.value;
    const newPrice = this.priceToAdd.value;
    console.log('Le nom du produit est: ' + newTitle);
    console.log('Le prix du produit est: ' + newPrice);
  }
}

