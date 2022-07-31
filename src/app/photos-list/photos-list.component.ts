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

  nameCategoryClicked: string;

  ngOnInit() {
    console.log("---- PHOTOS LIST: " + this.route.snapshot.params['nameCategory'] + " ----")
    this.nameCategoryClicked = this.route.snapshot.params['nameCategory'];
    this.photos = this.photoCatServ.getPhotosFromCategoryClickedName(this.nameCategoryClicked);
  }



}