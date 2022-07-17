import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  
  totalPrice: number = 0;
  userName:String="";
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.userName = this.route.snapshot.queryParamMap.get('FullName')!;
   this.totalPrice=parseFloat( this.route.snapshot.queryParamMap.get('price')!);
  }

}
