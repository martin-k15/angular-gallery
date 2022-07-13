import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoCategoryService } from './service/photo-category.service';
import { PhotoCategoryComponent } from './photo-category/photo-category.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { FormAddCategoryComponent } from './photo-category/form-add-category/form-add-category.component';
import { PhotoAddComponent } from './photos-list/photo-add/photo-add.component';
import { NgxDropzoneComponent } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AppComponent,
    PhotoCategoryComponent,
    PhotosListComponent,
    FormAddCategoryComponent,
    PhotoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgxDropzoneComponent
  ],
  providers: [PhotoCategoryService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
