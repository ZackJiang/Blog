import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

    constructor(private http: Http) { }

    // Get all posts from the API
    getAllBlogs() {
  
        return this.http.get('http://localhost:3000/api/blogs')
                      .map(res => res.json());
    }


    addBlog(blog: any) {
	
        console.log(blog);

        let data = new URLSearchParams();
        data.append('country', blog['country']);
        data.append('description', blog['description']);

        this.http
        .post('http://localhost:3000/api/addblog', data)
        .subscribe(
      	    data => {
                console.log(data);
      	    }, 
      	    error => {
                console.log(error.json());
      	    }
        );

    }

    delBlog(id: number) {

        console.log(id);
        this.http
        .delete('http://localhost:3000/api/delblog/'+id)
        .subscribe(
            data => {
                console.log(data);
            }, 
            error => {
                console.log(error.json());
            }
        );
    }


    viewBlog(id: number) {

        return this.http.get('http://localhost:3000/api/viewblog/'+id)
                    .map(res => res.json());
    }


    updateBlog(blog: any) {
        let id = blog['_id'];
        let data = new URLSearchParams();
        data.append('country', blog['country']);
        data.append('description', blog['description']);

        this.http
        .put('http://localhost:3000/api/updateblog/'+id, data)
        .subscribe(
              data => {
                console.log(data);
              }, 
              error => {
                console.log(error.json());
              }
        );

    }

}