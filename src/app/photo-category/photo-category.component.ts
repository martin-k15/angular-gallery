import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhotoCategoryService } from '../service/photo-category.service';
import { PhotoCategory } from '../photo-category.module';
import { PhotosListComponent } from '../photos-list/photos-list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-category',
  templateUrl: './photo-category.component.html',
  styleUrls: ['./photo-category.component.scss']
})
export class PhotoCategoryComponent implements OnInit {
 
  constructor(private photoCategoryService: PhotoCategoryService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  categories: PhotoCategory[] = this.photoCategoryService.getCategoriesArray()

 //[routerLink]="'../categories/' + c.name"
  showCategory(c: PhotoCategory){

    this.photoCategoryService.setCategory(c);
    this.router.navigate([c.name], {relativeTo: this.route})
  }

}
