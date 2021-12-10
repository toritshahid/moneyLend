import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileValidators } from 'ngx-file-drag-drop';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  constructor() { }
  showDetails:boolean= false;
  searchBank:boolean=true;
  showProceed:boolean=false;
  showLogin:boolean=false;
  finalShow: boolean= false;
  fileName = '';
  ngOnInit(): void {
  }
  fileControl = new FormControl(
    [],
    [FileValidators.required, FileValidators.maxFileCount(1)]
  );

  onValueChange(event: any) {
    const file: File = event.target.files[0];
    console.log('File changed!');
    const reader = new FileReader();
    reader.onload = () => {
      this.fileName = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
  proceed(){
    this.showDetails = true;
    this.showProceed =true;
  }
  goForLogin(){
    this.searchBank=false;
    this.showProceed=false;
    this.showLogin=true;
  }
  showFinal(){
    this.searchBank=false;
    this.showProceed=false;
    this.showLogin=false;
    this.showDetails=false;
    this.finalShow=true;

  }

}
