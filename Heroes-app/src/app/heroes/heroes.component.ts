import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../Datalist-heroes';
import { HeroesService } from '../heroes.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Ranger'
  // };
  // Hero2 = {
  //   id: 2,
  //   name: 'Micky'
  // };
  
  heroes = HEROES;
  selectedHero?: Hero;
  
  constructor(private heroService: HeroesService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id} , hero name =${hero.name} , hero color =${hero.Color}`);
    
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
}
