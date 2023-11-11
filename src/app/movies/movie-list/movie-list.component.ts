import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  movies: Movie[] = [];
  selectedMovie!: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  showDetails(movie: Movie): void {
    this.selectedMovie = movie;
  }

}
