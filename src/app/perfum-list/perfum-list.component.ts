import { Component, OnInit } from '@angular/core';
import { Perfume} from './perfume';

@Component({
  selector: 'app-perfum-list',
  templateUrl: './perfum-list.component.html',
  styleUrls: ['./perfum-list.component.css']
})
export class PerfumListComponent implements OnInit {

  perfumes: Perfume [] =[
    {
    nombre:'Aventure',
    marca:'KAYAK',
    precio:1500,
    stock:10,
    imagen:'assets/img/adventure.jpg',
    oferta:true,
  },
  {
    nombre:'Clasic',
    marca:'KAYAK',
    precio:5,
    stock:0,
    imagen:'assets/img/kaiak.jpg',
    oferta:false,
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
