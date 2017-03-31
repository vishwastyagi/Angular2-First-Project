import { Component } from '@angular/core';



@Component({
  moduleId: module.id, //enable module-relative file URLs
  selector: 'my-app',
  template:`
        <h2>{{title}}</h2>
        <!--<my-heroes></my-heroes>    -->
        <!--Angular Router provides a routerLinkActive directive
         we can use to add a class to the HTML navigation element whose route matches the active route-->
        <nav>
          <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        </nav>
        <router-outlet></router-outlet>
        
   `,
   styleUrls: ['app.component.css']

})
export class AppComponent {
  
   title='Tour Of Heroes';
 

 
}


