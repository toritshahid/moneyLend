import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor() { }
  selectFormControl = new FormControl('', Validators.required);
  gender = ['Mr.' ,'Mrs.', 'Miss', 'Other']
  ngOnInit(): void {
  }

}
