import { Component, OnInit } from '@angular/core';

import { FilmApiService } from '../services/film-api.service';


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  filmList: any[] = [];
  decade: number;
  noResult = false;
  page = 1;

  constructor(private _filmApiService: FilmApiService) { }

  ngOnInit() {
  	this.initializeDisplay();
  }

  initializeDisplay() { 	
      this._filmApiService.searchFilm('Batman').subscribe(data => {
  		// console.log(data);
  		this.filmList = data.Search;
  		// console.log(this.filmList);
      });
  }

  onDecadeSelect(decade) {  	
  	this.decade = decade; 

	this.noResult = false;
	this.page = 1;
	this.filmList = [];
  	this.filterByDecade();
  }

  filterByDecade() {
  	
  	// Made a Recursive Function as API only provides 10 to Retrieve the Results until 10 entries.

  	if (this.filmList.length < 10 && !this.noResult) {
	  	this._filmApiService.searchFilm('Batman', this.page).subscribe(data => {
	  		// console.log(data);

	  		if (data.Search.length > 0) {
	  			const resultList = data.Search;
	  			resultList.forEach(result => {
	  				// console.log(result);

	  				if (result && result.Year && this.filmList.length < 10) {	  					
	  					const year = parseInt(result.Year.substring(0, 4));

	  					if (year >= this.decade && year < (this.decade + 10))
	  					{
	  						this.filmList.push(result);
	  					}  	  					
	  				}
	  			});
	  		} else {
	  			this.noResult = true;
	  		}

			this.page++;
	  		this.filterByDecade();
	  		// console.log(this.filmList);
	    });
    }
  }

}
