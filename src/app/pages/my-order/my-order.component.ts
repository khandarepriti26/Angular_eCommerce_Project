import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-order.component.html',
  styleUrl: './my-order.component.css'
})
export class MyOrdersComponent {
 

  studentObj: any = {
    name: '',
    
  };

  cityList: any;

  isActive: boolean = false;
 dayName: string = "Mon"


  constructor() {
    if(this.studentObj && this.studentObj.address) {
      const city = this.studentObj.address.city;
    }
  }

  readValue(event: any) {
    debugger;
  }






}