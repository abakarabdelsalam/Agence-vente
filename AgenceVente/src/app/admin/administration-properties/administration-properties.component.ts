import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {PropertiesService} from 'src/app/services/properties.service'

@Component({
  selector: 'app-administration-properties',
  templateUrl: './administration-properties.component.html',
  styleUrls: ['./administration-properties.component.css']
})
export class AdministrationPropertiesComponent implements OnInit {
  propertiesForm: FormGroup;
  propertiesSubcription: Subscription;
  properties: any[] = [];

  constructor(private  fb: FormBuilder, private propertiesService:PropertiesService) { }

  ngOnInit(): void {
    this.initPropertiesForm();
    this.propertiesService.propertiesSubject.subscribe(
      (data) => {
        this.properties=data
      }
    );
    this.propertiesService.emitPreperties();
  }

  onSubmitPropertiesForm() {
    const newProperty = this.propertiesForm.value
    this.propertiesService.createProperty(newProperty)
    console.log(this.properties)

    }
  initPropertiesForm() {
    this.propertiesForm = this.fb.group({
      titre: [ "", Validators.required],
      categories: [ "", Validators.required],
      surface: "",
      description: [ "", Validators.required],
      price: [ "", Validators.required],
      pièces: ""
    })
  }

}
