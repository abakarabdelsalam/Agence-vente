import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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

  propertiesSubject = new Subject<any[]>();
  constructor() { }

   // troisieme cas subject

  emitPreperties() {
    this.propertiesSubject.next(this.properties)
  }

  // creation de properpties

  createProperty(property) {
    this.properties.push(property);
  }




  // function(getProperties) pour toutes les trois cas: Promise, Observable et Subject

  getProperties() {
          // premier cas promise

    //return new Promise((resolve, reject) => {
     // if (this.properties && this.properties.length > 0) {
       // resolve(this.properties);
     // } else {
     //   const erros = new Error(' les proprieté nexites pas ou vide')
      //  reject(erros);
      //}
      //}
      //);

          // deuxieme cas obsevable

    //return new Observable((observer) => {
    //  if (this.properties && this.properties.length > 0) {
     //   observer.next(this.properties)
      //  observer.complete();
      //} else {
      //  const erros = new Error('les proprieté nexites pas ou vide')
      //  observer.error(erros);
      //}

   // });





  }
}
