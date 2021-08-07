import { Injectable } from '@angular/core';
import {MessageService} from './message.service';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './Datalist-heroes';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {


  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
