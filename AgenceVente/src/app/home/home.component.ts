import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  properties = [];

     constructor(private propertiesService: PropertiesService) {

      }
  ngOnInit(): void {
    this.propertiesService.getProperties().then(
      (data:any) => {
        console.log(data);
        this.properties = data;
      }
    ).catch(
      (erros)=>{
        console.log(erros);
      }
     )

  };

 //fonction pour voir la disponiblté
 getColor(index) {
  if (this.properties[index].monDispo) {
    return 'red'
  } else {
    return 'green'

   }

  }


}



