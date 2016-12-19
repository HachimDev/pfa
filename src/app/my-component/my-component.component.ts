import { Component, OnInit } from '@angular/core';
import {AngularFire , FirebaseListObservable} from 'AngularFire2/index';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

components : FirebaseListObservable<any>;
  constructor(private af : AngularFire) {
    this.components = af.database.list('components');
   }

  ngOnInit() {
  }

}
