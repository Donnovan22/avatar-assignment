import { Component, Input, OnChanges } from '@angular/core';
import { CharacterService } from '../character.service';
import { forkJoin } from 'rxjs';
import { Movie } from '../movie.model';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnChanges {

  @Input() movie: Movie | undefined;
  
  characters: any[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnChanges(): void {
    this.loadCharacterDetails();
  }

  loadCharacterDetails(): void {
    if (this.movie) {
      const characterUrls = this.movie.characters.map((url: string) => this.characterService.getCharacterDetails(url));
      
      forkJoin(characterUrls).subscribe(
        (characters: any[]) => {
          this.characters = characters;
          console.log(this.characters);
        },
        (error) => {
          console.error('Error fetching character details:', error);
          this.characters = [];
        }
      );
    }
  }
}

