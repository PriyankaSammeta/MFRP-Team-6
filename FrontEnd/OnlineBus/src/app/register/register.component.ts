import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegService } from '../reg.service';
import { user } from '../user';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  title = 'angularConnecMongoDB';
  public response: Observable<user[]>
  data: any = [];
  public sampleData: any[] = [];
  displayVal: string = '';
  constructor(private pdtservice: RegService, private http: HttpClient, private router: ActivatedRoute) {
    this.response = this.pdtservice.fetchAPI();
    this.pdtservice.fetchAPI().subscribe(data => {
      this.sampleData = data;
    })
  }
  onSubmit(data: any) {
    this.http.post('http://localhost:8000/api/user', data)
      .subscribe((result) => {
        console.warn("result", result)
        this.pdtservice.fetchAPI().subscribe(data => {
          this.sampleData = data;
        })
      })
    console.warn(data);
  }



  

  getValue(val: string) {
    if (val === "") {
      this.pdtservice.fetchAPI().subscribe(data => {
        this.sampleData = data;
      })
    }
    else {
      //console.warn(val);
      this.sampleData = [];
      this.pdtservice.getapi().subscribe((data: any) => {
        // this.data=data;
        //console.log(data);

        for (let i = 0; i < data.length; i++) {
          if (val == data[i].firstName) {
            //console.warn(data[i]._id)
            this.pdtservice.getCurrentProductData(data[i]._id).subscribe((result: any) => {
              //console.warn(result);
              this.sampleData.push(result);
              this.response = (result);

            })
          }
        }
      })
    }
  }
Reg(){
  Swal.fire('Welcome','You have successfully Registered','success')
  
}
  ngOnInit() {
    this.pdtservice.fetchAPI().subscribe((data: any) => {
      this.data = data;
      console.log(data);
    })
  }

}