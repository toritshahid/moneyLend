import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { UploadDocsComponent } from './upload-docs/upload-docs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'personalDetails', component: PersonalDetailsComponent},
  {path: 'uploadDocuments', component: UploadDocsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
