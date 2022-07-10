import { Component } from '@angular/core';
import { AddNewCategoryService } from './add-new-category.service';
import { PhotoCategory } from './photo-category.module';
import { PhotoCategoryService } from './photo-category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-gallery';

  categories: PhotoCategory[];
  addNewCategory: boolean = false;
  constructor(private photoCategoryService: PhotoCategoryService, private addNewCategoryService: AddNewCategoryService){}

  ngOnInit():void{
    this.categories = this.photoCategoryService.getCategories();
  }



  
}
