import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCategoryComponent } from './photo-category.component';

describe('PhotoCategoryComponent', () => {
  let component: PhotoCategoryComponent;
  let fixture: ComponentFixture<PhotoCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
