import { Component, OnInit } from '@angular/core';
import { PhotoCategoryService } from '../service/photo-category.service';
import { PhotoCategory } from '../photo-category.module';
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

  showCategory(c: PhotoCategory) {
    this.router.navigate([c.name], { relativeTo: this.route })
  }

}
