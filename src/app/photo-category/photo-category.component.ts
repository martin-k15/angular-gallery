import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhotoCategoryService } from '../photo-category.service';
import { PhotoCategory } from '../photo-category.module';


@Component({
  selector: 'app-photo-category',
  templateUrl: './photo-category.component.html',
  styleUrls: ['./photo-category.component.scss']
})
export class PhotoCategoryComponent implements OnInit {

  @Input() cat: PhotoCategory[];
  @Input() addNew: boolean =false;

  categorySelected: boolean = false;
  categorySelectedEv = new EventEmitter<boolean>();

  @Output() userAddCategory = new EventEmitter<boolean>();

  categories: PhotoCategory[];

  constructor(private photoCategoryService: PhotoCategoryService) { }


  ngOnInit(): void {
    this.categories = this.photoCategoryService.getCategories();
    console.log("Categories: " + this.categories)
  }

  addCategory(){
    if(this.addNew){
      this.userAddCategory.emit(!this.addNew)
      this.addNew = false;
    } else{
      this.userAddCategory.emit(!this.addNew)
      this.addNew = true;
    }
  }

}
