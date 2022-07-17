import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormAddCategoryComponent } from './photo-category/form-add-category/form-add-category.component';
import { PhotoCategoryComponent } from './photo-category/photo-category.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoCategoryService } from './service/photo-category.service';
import { PhotoAddComponent } from './photos-list/photo-add/photo-add.component';
import { PhotoCategory } from './photo-category.module';

let routes: Routes = [
  {path: '', redirectTo:'/categories', pathMatch: 'full'},
  {path: 'categories/add', component: FormAddCategoryComponent},
  {path: 'categories', component: PhotoCategoryComponent},
  {path: 'categories/:nameCategory', component: PhotosListComponent},
  //{path: 'drag-and-drop', component: PhotoAddComponent},
  {path: 'categories/:nameCategory/drag-and-drop', component: PhotoAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

  constructor(private photoService: PhotoCategoryService) {
/*
    this.categories.forEach(c => {
      routes.push({path: 'categories/' + c.name.toString(), component: PhotosListComponent})
    });
    console.log("Routes filled: ");
    console.log(routes);
    */
  }



  categories: PhotoCategory[] = this.photoService.getCategoriesArray();
  
  routes = this.photoService.addToRoutes(routes);

}
