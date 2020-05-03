import { Component, OnInit } from '@angular/core';
import { Bitacora } from '../models/bitacora';

interface Lista{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  turnos: Lista[] = [
    {value: '1', viewValue: '06:00-14:00'},
    {value: '2', viewValue: '14:00-22:00'},
    {value: '3', viewValue: '22:00-06:00'},
    {value: '4', viewValue: '06:00-18:00'},
    {value: '5', viewValue: '18:00-06:00'},
  ];
}
