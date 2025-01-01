import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', component: ListeComponent},
  { path: 'liste', redirectTo: ""},
  { path: "details/:id", component: DetailsComponent},
  { path: "ajouter", component: AjouterComponent},
  { path: "react", component: ReactiveFormComponent},
  { path: "**", component:PageNotFoundComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
