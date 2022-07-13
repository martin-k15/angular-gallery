import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhotoCategoryService } from '../service/photo-category.service';
import { PhotoCategory } from '../photo-category.module';
import { PhotosListComponent } from '../photos-list/photos-list.component';

@Component({
  selector: 'app-photo-category',
  templateUrl: './photo-category.component.html',
  styleUrls: ['./photo-category.component.scss']
})
export class PhotoCategoryComponent implements OnInit {
 
  constructor(private photoCategoryService: PhotoCategoryService) { }

  ngOnInit(): void {
  }

  categories: PhotoCategory[] = this.photoCategoryService.getCategoriesArray()

  showCategory(c: PhotoCategory){
    this.photoCategoryService.setCategory(c);
  }

}
