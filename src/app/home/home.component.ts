import { Component, OnInit } from '@angular/core';
import { Bitacora } from '../models/bitacora';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista: string [] = ['06:00-14:00', '14:00-22:00', '22:00-06:00', '06:00-18:00', '18:00-06:00'];
  constructor() { }

  ngOnInit() {
  }

}
