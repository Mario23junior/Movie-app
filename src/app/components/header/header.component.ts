import { Component } from '@angular/core';
import { Movie } from '../model/Movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  favoritNumber = 0

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
        this.contFavorite()
      })
  }
 
  contFavorite(): void {
    for(let favoriti of this.list){
      if(favoriti.favorito)
      this.favoritNumber++;
    }
  }
}
