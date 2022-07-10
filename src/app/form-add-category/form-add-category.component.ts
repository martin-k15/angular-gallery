import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-add-category',
  templateUrl: './form-add-category.component.html',
  styleUrls: ['./form-add-category.component.scss']
})
export class FormAddCategoryComponent implements OnInit {

  @Output() closeAddForm = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeForm(){
    this.closeAddForm.emit();
  }

}
