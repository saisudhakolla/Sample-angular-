import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url : string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/customer/week';
   }

   getCustomers(): Observable<Customer[]>{
      return this.http.get<Customer[]>(this.url);
   }


}
