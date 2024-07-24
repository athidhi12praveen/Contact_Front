import { Component } from '@angular/core';
import { userSchema } from '../user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent {

  user:userSchema={}

  constructor(private api:ApiService){}

  createuserData(){
    this.api.createUser(this.user).subscribe({

      next:(res:any)=>{
        alert("New contact updated")
      },
      
      error:(err:any)=>{
        alert("Failed")
      }
    })
  }

  // cancel button

  cancel(){
    this.user={}
  }


}
