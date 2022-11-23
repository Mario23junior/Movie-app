import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/Movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: Movie[] = []

 
  constructor(private service: MovieService) {

  }
  ngOnInit(): void {
    this.findAll()
 
  }

  findAll(): void {
    this.service.findAll()
      .subscribe(res => {
        this.list = res;
      })
  }

  favoritar(movie: Movie) {
    this.service.favoritar(movie)
      .subscribe(resfavor => {
        movie.favorito = !movie.favorito
      })
  }
 
}
