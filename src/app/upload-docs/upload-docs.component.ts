import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-docs',
  templateUrl: './upload-docs.component.html',
  styleUrls: ['./upload-docs.component.css']
})
export class UploadDocsComponent implements OnInit {



  ngOnInit(): void {
  }
  fileName = '';

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

}
