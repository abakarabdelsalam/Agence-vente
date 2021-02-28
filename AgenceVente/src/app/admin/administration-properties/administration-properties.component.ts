import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PropertiesService } from 'src/app/services/properties.service'






@Component({
  selector: 'app-administration-properties',
  templateUrl: './administration-properties.component.html',
  styleUrls: ['./administration-properties.component.css']
})
export class AdministrationPropertiesComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
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
    this.propertiesService.createProperty(newProperty);
  // $('#exampleModalLabel').modal.hide


  }
// funtion permet de de fiare quitter le foemulaire
  public onSave() {
    this.closebutton.nativeElement.click();
  }

  // funtion permet de suppriper un element du tableau

  deleteProperties(index) {
    this.propertiesService.onDeleteProperties(index);

  }


  initPropertiesForm() {
    this.propertiesForm = this.fb.group({
      categorie:[ "", Validators.required],
      capacity: [ "", Validators.required],
      color: [ "", Validators.required],

      description: [ "", Validators.required],
      price: [ "", Validators.required],
      pièces: ""
    })
  }
//funtion qui rafraichie le formulaire
  resetForm() {
    this.propertiesForm.reset();
  }

}
