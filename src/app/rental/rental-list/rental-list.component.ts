import { Component, OnInit } from '@angular/core';
import{RentalService} from '../sharad/rental.service'
import{Rental} from '../sharad/rental.module'

@Component({
  selector: 'bwn-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
 rentals: Rental[] =[];
  constructor(private rentalService:RentalService) { }

  ngOnInit() {
   const rentalObjervales =this.rentalService.getRentals();
  
   rentalObjervales.subscribe((rentals:Rental[])=>
   {
this.rentals = rentals;
   },
   (err)=>{

   },
   ()=>{

   });
  }

}
