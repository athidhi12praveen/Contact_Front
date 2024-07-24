import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { userSchema } from '../user';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  // class property for contact-list

  user:userSchema[]=[]

  searchkey:string=""

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getContactList()
  }

  // to display contact list 
  getContactList(){
    this.api.getAllcontacts().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.user=res 
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }
}
