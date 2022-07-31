import { Component, ElementRef, ViewChild } from '@angular/core';
import { PhotoCategory } from './photo-category.module';
import { PhotoCategoryService } from './service/photo-category.service';
import { Photo } from './photo.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-gallery';

  constructor(private photoCategoryService: PhotoCategoryService) { }

  ngOnInit(): void {

  }
  /*
    openPopup() {
      console.log(this.popNew.nativeElement);
      this.popNew.nativeElement.classList.add("open-popup");
    }
  */

}
