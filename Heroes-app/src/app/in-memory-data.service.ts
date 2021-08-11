import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Hero_1',Color:'Blue' },
  { id: 2, name: 'Hero_2' ,Color:'Blue'},
  { id: 3, name: 'Hero_3',Color:'Red' },
  { id: 4, name: 'Hero_4' ,Color:'Blue'},
  { id: 5, name: 'Hero_5' ,Color:'Red'},
  { id: 6, name: 'Hero_6',Color:'Blue' },
  { id: 7, name: 'Hero_7',Color:'Blue' },
  { id: 8, name: 'Hero_8' ,Color:'Red'},
  { id: 9, name: 'Hero_9',Color:'Green' },
  { id: 10, name: 'Hero_10',Color:'Green' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 10;
  }
}