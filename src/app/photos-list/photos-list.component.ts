import { Component, OnInit } from '@angular/core';
import { PhotoCategory } from '../photo-category.module';
import { PhotoCategoryService } from '../photo-category.service';
import { Photo } from '../photo.module';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  constructor(private photoCatServ: PhotoCategoryService) { }
  nameCategory: string;
  photos: Photo[] = [];

  ngOnInit(){

  }
  

   test(){
    this.nameCategory = this.photoCatServ.getCategoryName();
    this.photos = this.photoCatServ.getPhotosOfCategory(this.nameCategory);
    console.log("Name get, photos are: "+ this.photos)
   }
}
