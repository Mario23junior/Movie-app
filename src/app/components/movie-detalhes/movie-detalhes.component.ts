import { Component } from '@angular/core';
import { Movie } from '../model/Movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-detalhes',
  templateUrl: './movie-detalhes.component.html',
  styleUrls: ['./movie-detalhes.component.css']
})
export class MovieDetalhesComponent {


  list: Movie[] = []
  favoritNumber = 0


  constructor(private service: MovieService) {

  }
  ngOnInit(): void {
    this.findAll()

  }

  findAll(): void {
    this.service.findAll()
      .subscribe(res => {
        this.list = res;
        this.contFavorite()
      })
  }

  favoritar(movie: Movie) {
    this.service.favoritar(movie)
      .subscribe(resfavor => {
        movie.favorito = !movie.favorito
        this.contFavorite()
      })
  }

  contFavorite(): void {
    for(let favoriti of this.list){
      if(favoriti.favorito)
       this.favoritNumber++
    }
  }
}
