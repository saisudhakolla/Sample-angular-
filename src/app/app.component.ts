import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  customers : Customer[]

  constructor(private service: CustomerService){}
  show(){
    this.service.getCustomers().subscribe(data=>
      this.customers = data)
  
    };
      


}
