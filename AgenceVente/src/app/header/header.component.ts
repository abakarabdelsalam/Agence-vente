import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo = 'MonLogo'
  isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }
 // foction qui active,disactive la classe home
  onClick() {
    this.isDisabled = false;
  }


}
