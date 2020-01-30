import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  bookShortcuts = [
    { name: "Movies" },
    { name: "Flight" },
    { name: "Bus" },
    { name: "Train" },
    { name: "Shop" },
    { name: "Hot Deals" },
    { name: "Events" },
    { name: "Hotels" },
    { name: "Cars & Bikes" },
    { name: "Brand Vouchers" },
    { name: "Amusement Park" },    
  ];

  shoppingShortcuts = [
    { name: "Shop On Mall" },
    { name: "FASTag" },
    { name: "Electronics" },
    { name: "Men Fashion" },
    { name: "Women Fashion" },
    { name: "Home & Kitchen" },
    { name: "Mobiles" },
    { name: "Laptops" },
    { name: "TVs & Appliances" },
  ];

paytmMall=[
  {title:"Smartphones at Best Price Online",
  item:[{
    name:"mobile"

    },{
    name:"mobile"

  },
  {
    name:"mobile"

  }],
  },
  {title:"Fashion Offers"},
  {title:"Grocery Bestsellers"},
  // {title:"Travel"},
  // {title:"Entertainment"},
  // {title:"Gadget Zone"},
  // {title:"Paytm Money | Invest in Mutual funds"},
  // {title:"Appliances | Best Prices Online"},
];

}
