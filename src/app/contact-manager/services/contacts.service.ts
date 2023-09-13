import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  // 1. get the form data from component
  addContact(contact: any) {
    console.log(contact); // form data
    // 2. send the form data to the REST API
    // 2.1 What's the REST API endpoint? https://jsonplaceholder.typicode.com/users
    // 2.2 What's the HTTP Method? POST
    // 2.3 What's the REST API Client Tool? HttpClient 
    return this.http.post('https://jsonplaceholder.typicode.com/users', contact)
      .pipe(map((res: any) => {
        // 3. get the res from the REST API
        console.log(res);
        return res; // 4. send the res to the component
      }));     
  }

  getContacts() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  getContactById(id: string | null) {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users/' + id)
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      );
   
  }

}
