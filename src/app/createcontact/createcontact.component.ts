import { Component } from '@angular/core';
import { userSchema } from '../user';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent {

  user:userSchema={}

  constructor(private api:ApiService, private router: Router){}

  createuserData(){
    this.api.createUser(this.user).subscribe({

      next:(res:any)=>{
        alert("New contact updated")
        this.router.navigate(['/list']);
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
