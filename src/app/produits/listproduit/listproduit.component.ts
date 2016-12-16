import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../produit.service';



@Component({
  selector: 'list-produit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css'],
  providers: [ProduitService]
})

export class ListProduitComponent implements OnInit {

	listProd;
	courses = ['course1','course2','course3','course4'];

	constructor( produitService : ProduitService){
		this.listProd = produitService.getListProduits();
	}

	ngOnInit(){

		// this.listProd = [
		// 	{codeP : '123456', nom: 'bouteille', prix:'5'},
		// 	{codeP : '123456', nom: 'Bimo', prix:'1.5'},
		// 	{codeP : '123456', nom: 'sereal', prix:'25'},
		// 	{codeP : '123456', nom: 'Limonade', prix:'5.5'}];
	}
}