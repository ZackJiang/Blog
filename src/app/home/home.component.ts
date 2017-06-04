import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs: any;
  /*
  blogs: any = [
    {country:"Norway",desc:"Travelling in Norway",path:"../../../../assets/img/city/norway.jpg"},
    {country:"Iceland",desc:"Travelling in Iceland",path:"../../../../assets/img/city/iceland.jpg"},
    {country:"UK",desc:"Travelling in UK",path:"../../../../assets/img/city/london.jpg"},
    {country:"Germany",desc:"Travelling in Germany",path:"../../../../assets/img/city/germany.jpg"},
    {country:"Singapore", desc:"Travelling in Singapore",path:"../../../../assets/img/city/singapore.jpg"},
    {country:"Turkey", desc:"Travelling in Turkey",path:"../../../../assets/img/city/turkey.jpg"},
  ];
  */
  //private postsService: PostsService
  constructor(private postsService: PostsService) { }

  ngOnInit() {

   
	this.postsService.getAllBlogs()
    				   .subscribe( 
        					data => {
            				this.blogs = data.blogs;
            				//console.log(data);

       				 	}
    );
    
  }

  delBlog(id): void {

      //console.log(blog);
      this.postsService.delBlog(id);
      location.reload();
  }

  
  viewBlog(id): void {

	  location.href = '/viewblog/'+id;

  }


}
