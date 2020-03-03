import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import { Hero } from './hero';
import {Observable} from 'rxjs';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  /* getHeroes() : Hero[]{
    console.log(HEROES);
    return HEROES;
  } */
  
  getHeroes(): Observable<Hero[]>{
    return of(HEROES);
  }
 
}
