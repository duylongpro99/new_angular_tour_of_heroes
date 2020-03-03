import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import { MessageService } from "../message.service";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Superman"
  }
  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService : MessageService) {
      
   }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Fetched information of ${hero.name}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    //this.heroes = this.heroService.getHeroes();
    console.log(this.heroes)
  }

}
