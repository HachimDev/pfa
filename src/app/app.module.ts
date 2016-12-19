import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

//modification
import * as firebase from 'firebase';
import {AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from './firebase.config';


import { AppComponent } from './app.component';
import {AjoutProduitComponent} from './produits/ajoutProduit/ajoutproduit.component';
import {ListProduitComponent} from './produits/listproduit/listproduit.component';
import { MyComponentComponent } from './my-component/my-component.component';




@NgModule({
  declarations: [
    AppComponent,
    AjoutProduitComponent,
    ListProduitComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
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
  bootstrap: [AppComponent, ]
})
export class AppModule { }
