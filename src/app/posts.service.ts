import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
  
      return this.http.get('/api/posts')
      .map(res => res.json());
  }


  addPost(info) {
	
      console.log(info);

      let data = new URLSearchParams();
      data.append('country', info['country']);
      data.append('description', info['description']);

      this.http
      .post('http://localhost:3000/api/addblog', data)
      .subscribe(
      data => {
            console.log('okay');
      }, error => {
            console.log(error.json());
      });

  }


}