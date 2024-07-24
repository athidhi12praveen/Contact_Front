import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userSchema } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url="http://localhost:3000"

  constructor(private http:HttpClient) { }

  // to get all contact
  getAllcontacts(){
    return this.http.get(`${this.base_url}/contacts`)
  }

  // create user contact
  createUser(user:userSchema){
    return this.http.post(`${this.base_url}/contacts`,user)
  }

  // api call for get a single contact
  viewContactApi=(id:any)=>{
    return this.http.get(`${this.base_url}/contacts/${id}`)
  }

  // edit existing contact
  getexistingContact(id:any){
    return this.http.get(`${this.base_url}/contacts/${id}`)
  }

  // update contact
  updateContact(id:any,data:userSchema){
    return this.http.put(`${this.base_url}/contacts/${id}`,data)
  }

  // delete contact
  deleteContact(id:any){
    return this.http.delete(`${this.base_url}/contacts/${id}`)
  }
}
