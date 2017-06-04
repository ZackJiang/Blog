import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgaModule } from './theme/nga.module';

import { PostsService } from './posts.service';
import { AddblogComponent } from './addblog/addblog.component';
import { ViewblogComponent } from './viewblog/viewblog.component';


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
  },
  {
    path: 'viewblog/:id',
    component: ViewblogComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddblogComponent,
    ViewblogComponent,
    ViewblogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES), // Add routes to the app
    NgaModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
