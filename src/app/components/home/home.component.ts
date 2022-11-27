import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/Movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: Movie[] = []
  favoritNumber = 0
   
  faSearch = 'faSearch'
  seachTeam:String  = ""


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
    for (let favoriti of this.list) {
      if (favoriti.favorito) {
        this.favoritNumber++
      }
    }
  }

  viewDetalhe(mov: Movie) {
    console.log(mov.id)
  }

  

  search(event:Event) : void{
    const target = event.target as HTMLInputElement
    const value = target.value

    this.list = this.list.filter(movie =>{
     return movie.nome.toLowerCase()
      .includes(value)
    })
  }

}
