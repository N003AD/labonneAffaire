import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { DataService } from './data.service';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListeComponent,
    DetailsComponent,
    PageNotFoundComponent,
    AjouterComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
