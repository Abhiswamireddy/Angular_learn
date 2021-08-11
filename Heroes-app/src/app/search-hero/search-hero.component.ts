import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent implements OnInit {

  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroesService: HeroesService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      
      debounceTime(300),

      distinctUntilChanged(),

      
      switchMap((term: string) => this.heroesService.searchHeroes(term)),
    );
  }

}
