import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-administration-properties',
  templateUrl: './administration-properties.component.html',
  styleUrls: ['./administration-properties.component.css']
})
export class AdministrationPropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitPropertiesForm(form: NgForm) {
    console.log(form);

  }

}
