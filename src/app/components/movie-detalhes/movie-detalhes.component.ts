import { Component } from '@angular/core';
import { ActivatedRoute, Route, RouterLinkActive } from '@angular/router';
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

  movie: Movie = {
    id: '',
    nome: '',
    imagem: '',
    descricao: '',
    favorito: false,
    dataLancamento: ''
  }

  constructor(
    private service: MovieService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.movie.id = this.route.snapshot.paramMap.get("id")!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.movie.id)
      .subscribe((res) => {
        this.movie = res;
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
    for (let favoriti of this.list) {
      if (favoriti.favorito)
        this.favoritNumber++
    }
  }
}
