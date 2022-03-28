import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pdtdata } from '../pdtdata';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title = 'OnlineBus';
  public response: Observable<Pdtdata[]>
  data: any = [];
  public sampleData: any[] = [];
  public busdata: any[] =[];
  public price: any;
  displayVal: string = '';
  constructor(private pdtservice: ProductsService, private http: HttpClient, private router: ActivatedRoute) {
    this.response = this.pdtservice.fetchAPI();
    this.pdtservice.fetchAPI().subscribe(data => {
     // this.sampleData = data;
     console.log(data);
    })
  }
  onSubmit(data: any) {
    this.http.post('http://localhost:3000/api/bus', data)
      .subscribe((result) => {
        console.warn("result", result)
        this.pdtservice.fetchAPI().subscribe(data => {
          this.sampleData = data;
        })
      })
    console.warn(data);
  }



  deleteProduct(employeeId: any) {

    this.pdtservice.deleteProduct(employeeId).subscribe((result: any) => {
      console.warn('result', result)
      this.pdtservice.fetchAPI().subscribe(data => {
        this.sampleData = data;
      })
    })
  }

  getValue(val: string, val1 : string) {
   
   
      //console.warn(val);
      this.sampleData = [];
      this.pdtservice.getapi().subscribe((data: any) => {
        // this.data=data;
        //console.log(data);

        for (let i = 0; i < data.length; i++) {
          if (val == data[i].from && val1== data[i].to) {
            //console.warn(data[i]._id)
            this.pdtservice.getCurrentProductData(data[i]._id).subscribe((result: any) => {
              //console.warn(result);
              this.sampleData.push(result);
            //  this.response = (result);

            })
          }
        }
      })
    }

    
  

  ngOnInit() {
    this.pdtservice.getCurrentProductData(this.router.snapshot.params['_id']).subscribe((result: any)=>{
    this.busdata.push(result);
    this.price=(result.fare);
    console.warn(result.fare);
  })}


  
  // bookingArray=[
  //   {
  //     seatId:1,
  //     seat:1,
  //     fare:1290,
  //   }
  //  ]

  
  inc(busbook: { seat: number; }){
    if(busbook.seat != 30){
      busbook.seat += 1;
    }
  }
  dec(busbook: { seat: number; }){
    if(busbook.seat != 1){
      busbook.seat -= 1;
    }
  }

  

   
}

