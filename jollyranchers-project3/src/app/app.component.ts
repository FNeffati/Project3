import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements  OnInit{
  title = 'jollyranchers-project3';
  path = '';

  ngOnInit(): void
  {

  }

  // Author: Nisanur Genc
  // It changes the router of the page and helps with going back and forth between
  // Forum and Home pages
  constructor(private pathChange: Router)
  {
    pathChange.events.subscribe((event)=>{
      if (event instanceof NavigationEnd){
        if (event.url == '/forum'){
          this.path = event.url.split('/')[1];
          console.log(event.url);
        }
        else{
          this.path = '';
        }

      }
    })
  }

}
