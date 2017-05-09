import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgaModule } from './theme/nga.module';

import { PostsService } from './posts.service';
import { AddblogComponent } from './addblog/addblog.component';


// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
   {
    path: 'addblog',
    component: AddblogComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddblogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES), // Add routes to the app
    NgaModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
