import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';


const routes:Routes=[
                    {
                        path: 'heroes',
                        component: HeroesComponent
                     },
                     {
                         path: 'dashboard',
                        component: DashboardComponent
                    },
                    {
                         path: 'detail/:id',
                        component: HeroDetailComponent
                    },
                    {
                      path: '',
                      redirectTo: '/dashboard',
                      pathMatch: 'full'
                    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
    //No declarations! Declarations are the responsibility of the companion module.
    //Adds module providers for guard services if you have them; there are none in this example.
})

export class AppRoutingModule{}