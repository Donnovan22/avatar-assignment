import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  selectedMovie!: Movie;

  showDetails(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
