import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-add-category',
  templateUrl: './form-add-category.component.html',
  styleUrls: ['./form-add-category.component.scss']
})
export class FormAddCategoryComponent implements OnInit {

  @Input() addNewCategory:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
