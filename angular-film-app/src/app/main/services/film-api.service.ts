import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmApiService {

	// TODO: Should be stored in configurable file
  	private _baseUrl: string = 'https://www.omdbapi.com/'
  	private _baseApiKey = '&apikey=250f72d6';

	constructor(private http: HttpClient) {}

	searchFilm(keyword, page?): Observable<any> {
		let pageKey = '';
		if (page > 1) {
			pageKey = '&page=' + page;
		}

		const url = this._baseUrl + '?s=' + keyword + pageKey + this._baseApiKey; 
		return this.http.get<any>(url);
	}

	getFilm(filmId): Observable<any> {
		const url = this._baseUrl + '?i=' + filmId + this._baseApiKey; 
		return this.http.get<any>(url);
	}

}
