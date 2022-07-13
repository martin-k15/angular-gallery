import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoCategoryService } from '../service/photo-category.service';

@Component({
  selector: 'app-form-add-category',
  templateUrl: './form-add-category.component.html',
  styleUrls: ['./form-add-category.component.scss']
})

export class FormAddCategoryComponent implements OnInit {

  @Output() closeAddForm = new EventEmitter();
  constructor(private pcService: PhotoCategoryService, private router: Router) { }

  
  ngOnInit(): void {
  }


  addCategory(name: string){
    this.pcService.toAddNewCategory(name);
    this.router.navigateByUrl('/categories');
    //this.pcService.addToRoutes(name);
  }

}
