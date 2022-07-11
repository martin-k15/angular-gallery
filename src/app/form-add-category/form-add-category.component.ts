import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoCategoryService } from '../photo-category.service';

@Component({
  selector: 'app-form-add-category',
  templateUrl: './form-add-category.component.html',
  styleUrls: ['./form-add-category.component.scss']
})

export class FormAddCategoryComponent implements OnInit {

  @Output() closeAddForm = new EventEmitter();
  constructor(private pcService: PhotoCategoryService, private router: Router) { }
  @Output() newNameCategory = new EventEmitter<string>();
  
  ngOnInit(): void {
  }

  closeForm(){
    this.closeAddForm.emit();

  }

  addCategory(name: string){
    this.closeForm();
    console.log("Close")
    this.pcService.toAddNewCategory(name);
    this.router.navigateByUrl('/categories');

  }

}
