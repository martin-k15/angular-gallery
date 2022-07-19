import { Component, OnInit } from '@angular/core';
import { PhotoCategory } from '../photo-category.module';
import { PhotoCategoryService } from '../service/photo-category.service';
import { Photo } from '../photo.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  constructor(private photoCatServ: PhotoCategoryService, private route: ActivatedRoute) { }

  nameCategory: string;
  photos: Photo[] = [];

  nameCategoryNew: string;
  //categories: PhotoCategory[] = this.photoCatServ.getCategoriesArray();
  //photosAllCategories: { name: string; photos: Photo[] }[] = [];


  ngOnInit() {
    console.log("Route: ")
    console.log(this.route.snapshot.params['nameCategory'])
    this.nameCategoryNew = this.route.snapshot.params['nameCategory'];
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



}