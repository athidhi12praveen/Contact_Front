import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(contacts:any[],searchTerm:string,property:string): any[] {
    let result:any=[]
    if(!contacts||searchTerm===""||property===""){
      return contacts
    }
    else{
      contacts.forEach((item:any)=>{
        if(item[property].trim().toLowerCase().includes(searchTerm.trim().toLocaleLowerCase())){
          result.push(item)
        }
      })
    }
    return result;
  }

}
