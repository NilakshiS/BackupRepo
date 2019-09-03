import { Component, OnInit } from '@angular/core';
import { IOrder } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-card',
  templateUrl: './manufacturecard.component.html',
  styleUrls: ['./manufacturecard.component.css']
})
export class ManufactureCardComponent implements OnInit {

  public receivedOrders: IOrder[];
  constructor(private _orderService: OrderService) { }

  ngOnInit() {
    this._orderService.getOrders().subscribe(data=>{this.receivedOrders=data; console.log("orders: "); console.log(this.receivedOrders);});
  }

}
