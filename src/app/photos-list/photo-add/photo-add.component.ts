import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PhotoCategoryService } from 'src/app/service/photo-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-add',
  templateUrl: './photo-add.component.html',
  styleUrls: ['./photo-add.component.scss']
})

export class PhotoAddComponent {

  constructor(pcService: PhotoCategoryService, private router: Router) { }

  @ViewChild('fileUpload') insertedImage: ElementRef;
  dropArea = document.getElementById('drop-area');


  ngOnInit() { }


  onInsert(file: HTMLInputElement){
    console.log(this.insertedImage.nativeElement.value);
    console.log(file.value);
    this.router.navigateByUrl('/categories')

    HTMLInputElement
  }
  /*
  fileName: string
  //http:HttpClient
  onFileSelected(event: Event) {
    //const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("thumbnail", file);
      const upload$ = this.http.post("/api/thumbnail-upload", formData);
      upload$.subscribe();
    }
    */
    /*
    preventDefaults (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    */
  }
