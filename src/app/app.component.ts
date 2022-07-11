import { Component } from '@angular/core';
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
  constructor(private photoCategoryService: PhotoCategoryService){}

  ngOnInit():void{
    this.categories = this.photoCategoryService.getCategories();
  }

  userClicked(){
    this.addNewCategory = true;
    console.log("A")
  }

  hideForm(){
    this.addNewCategory = false;
  }


  
}
