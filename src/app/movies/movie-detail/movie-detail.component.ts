import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { Movie } from '../movie.model';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent{
  /*movie!: Movie;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const episodeId = this.route.snapshot.paramMap.get('id');
    this.dataService.getMovies().subscribe((data: any) => {
      this.movie = data.results.find((m: { episode_id: number; }) => m.episode_id === +episodeId!);
    });
  }*/
  @Input() movie!: Movie;
}

