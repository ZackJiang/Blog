import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  addBlog(event) {
    console.log(event);
    this.postsService.addPost();

 	//this.postsService.getAllPosts().subscribe(posts => {
      //this.posts = posts;
    //});

  }



}
