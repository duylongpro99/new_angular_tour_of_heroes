import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import { Hero } from './hero';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) { }
  /* getHeroes() : Hero[]{
    console.log(HEROES);
    return HEROES;
  } */
  
  getHeroes(): Observable<Hero[]>{
    this.messageService.add("HeroService: Fetched heroes");
    return of(HEROES);
  }
 
}
