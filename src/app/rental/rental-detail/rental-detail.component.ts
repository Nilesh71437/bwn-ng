import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{RentalService} from '../sharad/rental.service'
import{Rental} from '../sharad/rental.module'

@Component({
  selector: 'bwn-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
 //currentId: String;
 rental: Rental;
  constructor(private routes:ActivatedRoute,private rentalService:RentalService) { }

  ngOnInit() {
this.routes.params.subscribe(
  (params)=>{
    console.log(params);
    //this.currentId=params['rentalId'];
    this.getRental(params['rentalId']);
  })

  }
getRental(rentalId:String){
  this.rentalService.getRentalId(rentalId).subscribe(

    (rental:Rental)=>{
this.rental=rental;
    } );
}
}
