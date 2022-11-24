import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/Movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-favoritados',
  templateUrl: './favoritados.component.html',
  styleUrls: ['./favoritados.component.css']
})
export class FavoritadosComponent {

  list: Movie[] = []
  listFavorito: Movie[] = []

  constructor(private service: MovieService) {
  }


  ngOnInit(): void {
    this.findAll()

  }

  findAll(): void {
    this.service.findAll()
      .subscribe(res => {
        res.forEach((listFavorito) => {
          if (listFavorito.favorito) {
            this.listFavorito.push(listFavorito)
          }
        })
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
