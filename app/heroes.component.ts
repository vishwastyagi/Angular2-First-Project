import { Component } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'my-heroes',
  moduleId: module.id,
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
 
   

})
export class HeroesComponent implements OnInit {
   name = 'Tour of Heroes';
   title='Tour Of Heroes';
  // hero='windstorm';
  //hero: Hero={id:1,name:'windstorm'}
  hero: Hero;
 // heroes = HEROES;

 heroes: Hero[];
  selectedHero:Hero;
  //heroService = new HeroService(); // don't do this

  constructor(private heroService:HeroService,private router: Router){}


  onselect(hero:Hero):void{
    this.selectedHero=hero;
  }

  getHeroes():void{
    //this.heroes=this.heroService.getHeroes();//[ts] Type 'Promise<Hero[]>' is not assignable to type 'Hero[]'.
     //this.heroService.getHeroes().then(heroes => this.heroes=heroes);
     this.heroService.getHeroesSlowly().then(heroes => this.heroes=heroes);
  }

  ngOnInit():void{
    this.getHeroes();
  }

  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id]); // we're passing a two-element link parameters array — a path and the route parameter — to the router.navigate method
  }

 
}


