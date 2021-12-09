import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css']
})
export class UploadDocsComponent implements OnInit {

  uploadDocuments: boolean = true;
  uploadPhoto: boolean = false;

  fileName = '';
  ngOnInit(): void {

  }

    constructor(private http: HttpClient) {}

    onFileSelected(event: any) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("thumbnail", file);

            const upload$ = this.http.post("/api/thumbnail-upload", formData);

            upload$.subscribe();
        }
    }
    uploadDocs(){
      this.uploadDocuments=false;
      this.uploadPhoto=true;
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

}
