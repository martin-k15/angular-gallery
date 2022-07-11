import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoCategoryService } from './photo-category.service';
import { PhotoCategoryComponent } from './photo-category/photo-category.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { FormAddCategoryComponent } from './form-add-category/form-add-category.component';

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
  providers: [PhotoCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
