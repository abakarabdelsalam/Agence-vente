import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-administration-properties',
  templateUrl: './administration-properties.component.html',
  styleUrls: ['./administration-properties.component.css']
})
export class AdministrationPropertiesComponent implements OnInit {
  propertiesForm: FormGroup;

  constructor(private  formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initPropertiesForm();
  }

  onSubmitPropertiesForm() {
        console.log(this.propertiesForm.value)
    }
  initPropertiesForm() {
    this.propertiesForm = this.formBuilder.group({
      titre: [ "", Validators.required],
      categories: [ "", Validators.required],
      surface: "",
      description: [ "", Validators.required],
      price: [ "", Validators.required],
      pièces: ""
    })
  }

}
