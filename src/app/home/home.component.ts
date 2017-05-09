import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any = [
    {title:"Norway",desc:"Travelling in Norway",path:"../../../../assets/img/city/norway.jpg"},
    {title:"Iceland",desc:"Travelling in Iceland",path:"../../../../assets/img/city/iceland.jpg"},
    {title:"UK",desc:"Travelling in UK",path:"../../../../assets/img/city/london.jpg"},
    {title:"Germany",desc:"Travelling in Germany",path:"../../../../assets/img/city/germany.jpg"},
    {title:"Singapore", desc:"Travelling in Singapore",path:"../../../../assets/img/city/singapore.jpg"},
    {title:"Turkey", desc:"Travelling in Turkey",path:"../../../../assets/img/city/turkey.jpg"},
  ];
  //private postsService: PostsService
  constructor() { }

  ngOnInit() {

    /*
	  this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
    */
  }

}
