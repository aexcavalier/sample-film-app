import { TestBed, inject } from '@angular/core/testing';

import { FilmApiService } from './film-api.service';

describe('FilmApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmApiService]
    });
  });

  it('should be created', inject([FilmApiService], (service: FilmApiService) => {
    expect(service).toBeTruthy();
  }));
});
