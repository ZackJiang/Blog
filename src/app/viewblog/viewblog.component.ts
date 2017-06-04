import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { NgForm,  FormBuilder,  FormGroup, Validators,  AbstractControl   } from '@angular/forms';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit {
 
 	view: any;
  	myForm: FormGroup;
  	_id : AbstractControl;
  	country: AbstractControl;
  	description: AbstractControl



  	constructor(private route: ActivatedRoute,
  			  	private postsService: PostsService,
  			  	private fb: FormBuilder
  			  	) 
  	{
  			   
		this.myForm = fb.group({ 
		    '_id': [''],   
            'country': ['', Validators.required], 
            'description': ['', Validators.required],
            'img': [''],  
        });  
        this.country = this.myForm.controls['country'];  
        this.description = this.myForm.controls['description'];  
		this._id = this.myForm.controls['_id']; 



  	}

 	ngOnInit() {

  		this.route.params.subscribe(params => {
    		if (params['id']) {

    			console.log(params['id']);


    			this.postsService.viewBlog(params['id'])
    		                 .subscribe( 
        						data => {
            						this.view = data.view;
            						this._id.setValue(this.view._id);
            						this.country.setValue(this.view.country);
            						this.description.setValue(this.view.description);
            						//console.log(this.view);

       				 		 	}
    						  );

			}
  		});


  	}


  	onSubmit(blog: string): void {  

        console.log('you update value:', blog);  
        this.postsService.updateBlog(blog);
        location.href = '/home';
  	}

}
