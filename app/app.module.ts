import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import { HeroService } from './hero.service';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
// Imports for loading & configuring the in-memory web api to fake web server that can handle requests for heroes.
import {InMemoryWebApiModule}

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule, HttpModule],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [HeroService]
  /*
  because HeroService  is required in many components
  */
})
export class AppModule {}
