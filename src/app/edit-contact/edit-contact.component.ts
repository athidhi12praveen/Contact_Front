import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { userSchema } from '../user';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{

  user:userSchema={}

  constructor(private route:ActivatedRoute, private api:ApiService){}
  ngOnInit(): void {
    this.existingContact(this.user.id)
  }

  // existing contact
  existingContact(id:any){
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      const{id}=res  
      console.log(id);

      this.api.getexistingContact(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.user=res
          
        },
        error:(err:any)=>{
          console.log(err);
        
        }
      })
      
    })
  }

  // update button

  update(){
    this.api.updateContact(this.user.id,this.user).subscribe({
      next:(res:any)=>{
        alert('Updated Successfully')
      },
      error:(err:any)=>{
        alert("Updation Failed")
      }
    })
  }

  // cancel button

  cancel(userId:any){
    this.existingContact(userId)
  }


}
