import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  properties = [];
  propertiesSubcription: Subscription;

     constructor(private propertiesService: PropertiesService) {

      }
  ngOnInit(): void {
    this.propertiesSubcription = this.propertiesService.propertiesSubject.subscribe(
      (data:any[]) => {
        this.properties=data
      }
    )

    this.propertiesService.emitPreperties();

  };

   ngOnDestroy() {
   this.propertiesSubcription.unsubscribe;
 }

 //fonction pour voir la disponiblté
 getColor(index) {
  if (this.properties[index].monDispo) {
    return 'red'
  } else {
    return 'green'

   }

 }



}



