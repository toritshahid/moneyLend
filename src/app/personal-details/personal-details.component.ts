import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor() { }
  showPersonal: boolean=true;
  showProfessional: boolean= false;
  selectFormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
  }
  proceed(){
    this.showPersonal=false;
    this.showProfessional=true;
  }

}
