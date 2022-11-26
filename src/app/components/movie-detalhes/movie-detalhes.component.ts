import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Route, RouterLinkActive } from '@angular/router';
import { GivenBase } from '../model/GivenBase';
import { Info } from '../model/Info';
import { Movie } from '../model/Movie';
import { GivenBaseService } from '../service/given-base.service';
import { InfoService } from '../service/info.service';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-detalhes',
  templateUrl: './movie-detalhes.component.html',
  styleUrls: ['./movie-detalhes.component.css']
})
export class MovieDetalhesComponent {

  favoritNumber = 0

  constructor(
    private service: MovieService,
    private serviceInfo: InfoService,
    private serviceGivenBase: GivenBaseService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {

  }


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

  givenBase: GivenBase = {
    id: '',
    emissora: '',
    urlTrilerVideo: '',
    direcao: '',
    tipo: ''
  }

  url = `${this.givenBase.urlTrilerVideo}`;



  ngOnInit(): void {
    this.movie.id = this.route.snapshot.paramMap.get("id")!,
      this.listInfo.id = this.route.snapshot.paramMap.get("id"),
      this.givenBase.id = this.route.snapshot.paramMap.get("id"),
      this.findById(),
      this.findByIdInfo(),
      this.findByIdGivenBase(),
      this.transform()
   }


  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  findById(): void {
    this.service.findById(this.movie.id)
      .subscribe((res) => {
        this.movie = res;
      })
  }


  findByIdInfo(): void {
    this.serviceInfo.findByIdInfo(this.listInfo.id)
      .subscribe((res) => {
        this.listInfo = res;
      })
  }

  findByIdGivenBase(): void {
    this.serviceGivenBase.findByIdGivenBase(this.givenBase.id)
      .subscribe((res) => {
        this.givenBase = res;
      })
  }
}
