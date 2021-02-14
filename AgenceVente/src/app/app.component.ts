import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgenceVente';

  monDispo = true;

// fonction pour voir la disponiblté
  getColor() {
   if (this.monDispo) {
     return 'red'
   } else {
     return 'green'
   }
 }
}
