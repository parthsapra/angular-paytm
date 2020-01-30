import { Component, OnInit ,Input,Output} from '@angular/core';

@Component({
  selector: 'app-book-shop',
  templateUrl: './book-shop.component.html',
  styleUrls: ['./book-shop.component.css']
})
export class BookShopComponent implements OnInit {

@Input() items:any;
@Input() title:string; 

  constructor() { }

  ngOnInit() {
  }

}