import { Component, OnInit, Input } from '@angular/core';
import { FilmApiService } from '../services/film-api.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  @Input() filmRecord: any;

  filmDetails: any;
  defaultImageUrl = './assets/images/default-poster.png';
  
  constructor(private _filmApiService: FilmApiService) { }

  ngOnInit() {
  	// console.log(this.filmRecord);
  	this.initializeDisplay();
  }

  initializeDisplay() {
  	this._filmApiService.getFilm(this.filmRecord.imdbID).subscribe(data => {
  			this.filmDetails = data;

  			this.filmDetails.localImagePosterPath = './assets/images/' + this.filmDetails.Poster.replace('https://m.media-amazon.com/images/M/','');

  			// console.log(this.filmDetails.Poster);
    	});
    	    	
    	// console.log(this.filmDetails);
  }

}
