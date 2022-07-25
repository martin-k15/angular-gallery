import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PhotoCategoryService } from 'src/app/service/photo-category.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-photo-add',
  templateUrl: './photo-add.component.html',
  styleUrls: ['./photo-add.component.scss']
})

export class PhotoAddComponent {

  constructor(private pcService: PhotoCategoryService, private router: Router, private route: ActivatedRoute) { }

  @ViewChild('fileUpload') insertedImage: ElementRef;
  dropArea = document.getElementById('drop-area');


  ngOnInit() { }

  onInsert(ev: Event) {
    console.log("-- onInsert function --")
    let nameCategory: string = this.route.snapshot.params['nameCategory']
    console.log(ev.target);
    //console.log(this.insertedImage.nativeElement.value);
    console.log("-----")
    console.log(this.insertedImage.nativeElement.files[0]);
    let url: string = window.URL.createObjectURL(this.insertedImage.nativeElement.files[0])
    console.log("URL: " + url)

    var path = (window.URL || window.webkitURL).createObjectURL(this.insertedImage.nativeElement.files[0]);
    console.log("path!!")
    console.log(this.insertedImage.nativeElement.files[0]);

    this.pcService.pushNewPhoto(nameCategory, url)


    this.router.navigateByUrl('/categories/' + nameCategory)
  }


}
