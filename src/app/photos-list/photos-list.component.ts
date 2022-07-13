import { Component, OnInit } from '@angular/core';
import { PhotoCategory } from '../photo-category.module';
import { PhotoCategoryService } from '../service/photo-category.service';
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

  //categories: PhotoCategory[] = this.photoCatServ.getCategoriesArray();
  //photosAllCategories: { name: string; photos: Photo[] }[] = [];


  ngOnInit() {

    this.nameCategory = this.photoCatServ.getCategoryName();
    this.photos = this.photoCatServ.getPhotos();

    /*
    if (this.nameCategory === undefined) {
      localStorage.getItem('C-NAME')
      console.log("Settt")
      //this.nameCategory = localStorage.getItem('C-NAME');
    } else {
      localStorage.setItem('C-NAME', this.nameCategory);
      //this.loadAllPhotos()
    }
    */
    console.log("Photos-list: onInit called! " + this.nameCategory)
  }


//  loadAllPhotos(): void;
/*
  loadAllPhotos() {
    this.categories.forEach(c => {
      this.photosAllCategories.push({ name: c.name, photos: c.photos })
    });
    console.log(this.photosAllCategories);
    this.nameCategory = this.photoCatServ.getCategoryName();
    console.log("this.nameCategory");
  }*/

}