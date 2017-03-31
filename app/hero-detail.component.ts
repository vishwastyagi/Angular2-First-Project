import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './hero';
import {ActivatedRoute, Params} from '@angular/router';
import { Location }  from '@angular/common';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';  //switchMap operator

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls:['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
   

    //@Input()
    hero:Hero;

    constructor(private heroService:HeroService, private route:ActivatedRoute, private location:Location){
    }

    ngOnInit():void{
        //switchMap operator maps the id in the observable route parameters to a new Observable, the result of the HeroService.getHero method.
        this.route.params.switchMap((params:Params)=>this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
        //Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.
    }

    goBack():void{
        this.location.back();
    }

}



