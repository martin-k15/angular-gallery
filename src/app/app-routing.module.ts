import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormAddCategoryComponent } from './photo-category/form-add-category/form-add-category.component';
import { PhotoCategoryComponent } from './photo-category/photo-category.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoCategoryService } from './service/photo-category.service';
import { PhotoAddComponent } from './photos-list/photo-add/photo-add.component';
import { PhotoCategory } from './photo-category.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

let routes: Routes = [
  {path: '', redirectTo:'/categories', pathMatch: 'full'},
  {path: 'categories', component: PhotoCategoryComponent},
  {path: 'categories/add', component: FormAddCategoryComponent},
  {path: 'categories/:nameCategory', component: PhotosListComponent},
  {path: 'categories/:nameCategory/drag-and-drop', component: PhotoAddComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo:'/not-found'}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

}
