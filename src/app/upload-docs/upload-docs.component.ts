import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FileValidators } from 'ngx-file-drag-drop';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css'],
})
export class UploadDocsComponent implements OnInit {
  uploadDocuments: boolean = true;
  uploadPhoto: boolean = false;
  public showWebcam = true;
  fileName = '';
  ngOnInit(): void {}

  constructor(private http: HttpClient) {}
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

  uploadDocs() {
    this.uploadDocuments = false;
    this.uploadPhoto = true;
  }
  public webcamImage: any = null;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
    this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }
}
