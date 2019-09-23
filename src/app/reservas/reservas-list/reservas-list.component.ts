import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-reservas-list',
  templateUrl: './reservas-list.component.html',
  styleUrls: ['./reservas-list.component.css']
})
export class ReservasListComponent implements OnInit {

  reservas: Array<any>;
  moviesMap = new Map();

  constructor(private reservaService: ReservasService, private moviesService: MoviesService) { }

  ngOnInit() {

    this.getMovies();
    this.getReservas();

  }

  getMovies(){
    this.moviesService.getAll().subscribe(
      res =>{
        res.forEach(element => {
          this.moviesMap.set(element.id,element.nombre);
        });
      },err =>{
        console.log(err);
      }
    );

  }

  getReservas() {
    this.reservaService.getAll().subscribe(
      res => {
        this.reservas = res;
      }, err => {
        console.log(err);
      }
    );

  }

}
