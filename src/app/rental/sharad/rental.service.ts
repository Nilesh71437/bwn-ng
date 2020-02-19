import{Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import{Rental} from './rental.module'
@Injectable()
export class RentalService{

    private rental:Rental[]= [{
        id:"1",
        title:"Apprtment1",
        city:"pune",
        street:"pimple saudagar",
        category:"Big appratment",
        image:"http://via.placeholder.com/350x250",
        bedroom:3,
        description:"Nice Appartment",
        dailyRate:34,
        shared:true,
        createdAt:"14/02/2020"
      },
      {
       id:"2",
       title:"Apprtment2",
       city:"pune",
       street:"pimple saudagar",
       category:"Big appratment",
       image:"http://via.placeholder.com/350x250",
       bedroom:3,
       description:"Nice Appartment",
       dailyRate:34,
       shared:true,
       createdAt:"14/02/2020"
     },
     {
       id:"3",
       title:"Apprtment3",
       city:"pune",
       street:"pimple saudagar",
       category:"Big appratment",
       image:"http://via.placeholder.com/350x250",
       bedroom:3,
       description:"Nice Appartment",
       dailyRate:34,
       shared:true,
       createdAt:"14/02/2020"
     },
     {
       id:"4",
       title:"Apprtment4",
       city:"pune",
       street:"pimple saudagar",
       category:"Big appratment",
       image:"http://via.placeholder.com/350x250",
       bedroom:3,
       description:"Nice Appartment",
       dailyRate:34,
       shared:true,
       createdAt:"14/02/2020"
     }];

     public getRentalId(rentalId:String):Observable<Rental>{
       return new Observable<Rental>((observer)=>{
        setTimeout(() => {
      const foundRental=   this.rental.find((rental)=>{
           return rental.id = rentalId;

         });
         observer.next(foundRental);
          },500);
       });

      
     }

     public getRentals():Observable<Rental[]>{
     return new Observable<Rental[]>((observer) => {
         this.rental;
         setTimeout(() => {
            observer.next(this.rental)
            },1000);
             });
       
     }
}