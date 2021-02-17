import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
 properties = [
   {
     categorie: 'iphone',
     type: 'ipone X',
     monDispo: true
   },
   {
     categorie: 'Nokia',
     type: 'Xpe',
     monDispo: true
   },
   {
     categorie: 'Samsun',
     type: 'S10',
     monDispo: false
   }
 ];
  constructor() { }

  getProperties() {
    return new Promise((resolve, reject) => {
      if (this.properties && this.properties.length > 0) {
        resolve(this.properties);
      } else {
        const erros = new Error(' les proprieté nexites pas ou vide')
        reject(erros);
      }
    })
  }
}
