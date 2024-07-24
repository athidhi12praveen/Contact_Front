import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  // class property for contact-list

  viewContact:any={}

  constructor(private api:ApiService,private activated:ActivatedRoute){}
  ngOnInit(): void {
    this.activated.params.subscribe((data:any)=>{
      console.log(data);
      const{id}=data
      console.log(id); 

      this.getContact(id)
    })
  }

  getContact=(id:any)=>{
    this.api.viewContactApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.viewContact=res
      },
      error:(err:any)=>{
        console.log(err);  
      }
    })
  }

  // delete contact
  delete(id:any){
    this.api.deleteContact(id).subscribe({
      next:(res:any)=>{
        this.getContact(id)
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
}
