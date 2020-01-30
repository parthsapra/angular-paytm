import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-paytm-mall-list',
  templateUrl: './paytm-mall-list.component.html',
  styleUrls: ['./paytm-mall-list.component.css']
})
export class PaytmMallListComponent implements OnInit {

@Input() items:any;
  constructor() { }

  ngOnInit() {
  }

}