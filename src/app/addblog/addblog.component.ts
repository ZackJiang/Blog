import { Component, OnInit } from '@angular/core';
import { NgForm,  FormBuilder,  FormGroup, Validators,  AbstractControl   } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

    myForm: FormGroup;
    country: AbstractControl;
    description: AbstractControl;

    constructor(
        private fb: FormBuilder,
        private postsService: PostsService)
    { 
            this.myForm = fb.group({  
              'country': ['', Validators.required], 
              'description': ['', Validators.required],
              'img': [''],  
            });  
            this.country = this.myForm.controls['country'];  
            this.description = this.myForm.controls['description'];  
    }

    ngOnInit() {}

    onSubmit(blog: string): void {  

        console.log('you submitted value:', blog);  
        this.postsService.addBlog(blog);
        location.href = '/home';
    }


}
