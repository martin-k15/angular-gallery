import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddCategoryComponent } from './form-add-category/form-add-category.component';
import { PhotoCategoryComponent } from './photo-category/photo-category.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoCategoryService } from './photo-category.service';
import { PhotoAddComponent } from './photo-category/photo-add/photo-add.component';

let routes: Routes = [
  {path: '', redirectTo:'/categories', pathMatch: 'full'},
  {path: 'add', component: FormAddCategoryComponent},
  {path: 'categories', component: PhotoCategoryComponent},
  {path: 'photos', component: PhotosListComponent},
  {path: 'drag-and-drop', component: PhotoAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

  constructor(private photoService: PhotoCategoryService) {}

}
