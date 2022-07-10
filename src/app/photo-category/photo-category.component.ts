import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddNewCategoryService } from '../add-new-category.service';
import { PhotoCategory } from '../photo-category.module';

@Component({
  selector: 'app-photo-category',
  templateUrl: './photo-category.component.html',
  styleUrls: ['./photo-category.component.scss']
})
export class PhotoCategoryComponent implements OnInit {

  @Input() cat: PhotoCategory[];
  @Input() addNew: boolean =false;

  @Output() userAddCategory = new EventEmitter<boolean>();

  constructor(private addNewCategoryService: AddNewCategoryService) { }


  ngOnInit(): void {
  }

  addCategory(){
    //this.addNew = this.addNewCategoryService.getStatus();
    if(this.addNew){
      this.userAddCategory.emit(!this.addNew)
      this.addNew = false;
    } else{
      this.userAddCategory.emit(!this.addNew)
      this.addNew = true;
    }
  }
}
