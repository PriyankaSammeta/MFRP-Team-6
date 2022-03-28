import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegService } from '../reg.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  public sampledata: any = []
  Email1: String = ""
  Password1: String = ""
  constructor(private products: RegService) {
  }
  Email(val: String, val1: String) {
    // console.warn(val)
    this.Email1 = val
    this.Password1 = val1
    // console.warn(val1)
  }
  login() {
    Swal.fire('Welcome', 'You have successfully Logged in', 'success')
  }
  ngOnInit() {

  }
}
