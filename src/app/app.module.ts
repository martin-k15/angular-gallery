import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoCategoryService } from './photo-category.service';
import { PhotoCategoryComponent } from './photo-category/photo-category.component';
import { PhotosListComponent } from './photo-category/photos-list/photos-list.component';
import { FormAddCategoryComponent } from './form-add-category/form-add-category.component';
import { AddNewCategoryService } from './add-new-category.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotoCategoryComponent,
    PhotosListComponent,
    FormAddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [PhotoCategoryService, AddNewCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
