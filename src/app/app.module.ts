import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import {AjoutProduitComponent} from './produits/ajoutProduit/ajoutproduit.component';
import {ListProduitComponent} from './produits/listproduit/listproduit.component';




@NgModule({
  declarations: [
    AppComponent,
    AjoutProduitComponent,
    ListProduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'ajouterprod',component: AjoutProduitComponent
      },
      {
        path: 'listprod',component: ListProduitComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
