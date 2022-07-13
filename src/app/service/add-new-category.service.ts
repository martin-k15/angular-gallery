import { EventEmitter, Output } from "@angular/core";

export class AddNewCategoryService{

    addNewCat: boolean = false;
    changed = new EventEmitter();

    getStatus(){
        return this.addNewCat;
    }

    showAddForm(){
        this.addNewCat = true;
        console.log("Clickedd")
        this.changed.emit();
    }
}