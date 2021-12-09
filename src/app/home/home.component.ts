import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  checkProceed :boolean = false;
  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({
    tel: new FormControl('', Validators.required),
  });
  proceed(){
    this.checkProceed=true
  }

}
