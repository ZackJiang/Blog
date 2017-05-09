import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }


  addPost() {
	 
     let body = JSON.stringify({ "test": "111" });
     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
     let options = new RequestOptions({ headers: headers, method: "post" });
 
     return this.http.post('http://localhost:3000/api/addblog', body, options).subscribe(
            data => {
                console.log(data.json());           
            }
      );



  }


}