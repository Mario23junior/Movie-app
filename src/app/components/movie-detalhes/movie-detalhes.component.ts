import { Component } from '@angular/core';
import { ActivatedRoute, Route, RouterLinkActive } from '@angular/router';
import { Info } from '../model/Info';
import { Movie } from '../model/Movie';
import { InfoService } from '../service/info.service';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-detalhes',
  templateUrl: './movie-detalhes.component.html',
  styleUrls: ['./movie-detalhes.component.css']
})
export class MovieDetalhesComponent {


  favoritNumber = 0

  movie: Movie = {
    id: '',
    nome: '',
    imagem: '',
    descricao: '',
    favorito: false,
    dataLancamento: ''
  }

  listInfo: Info = {
    id: '',
    elenco: '',
    genero: '',
    ano: '',
    autor: ''
  }

  constructor(
    private service: MovieService,
    private serviceInfo: InfoService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.movie.id = this.route.snapshot.paramMap.get("id")!,
    this.listInfo.id = this.route.snapshot.paramMap.get("id"),
    this.findById(),
    this.findByIdInfo()
  }

  findById(): void {
    this.service.findById(this.movie.id)
      .subscribe((res) => {
        this.movie = res;
      })
  }


  findByIdInfo(): void {
    this.serviceInfo.findByIdInfo( this.listInfo.id )
      .subscribe((res) => {
        this.listInfo = res;
      })
  }
}
