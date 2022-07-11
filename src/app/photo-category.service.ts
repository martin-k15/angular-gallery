import { PhotoCategory } from "./photo-category.module";
import { Photo } from "./photo.module";

export class PhotoCategoryService {
  photosForCategory: Photo[] = [
    new Photo('1', '../../assets/img/category-photos/1.webp'),
    new Photo('2', '../../assets/img/category-photos/2.webp'),
    new Photo('3', '../../assets/img/category-photos/3.webp'),
    new Photo('4', '../../assets/img/category-photos/4.webp'),
    new Photo('5', '../../assets/img/category-photos/5.webp'),
    new Photo('6', '../../assets/img/category-photos/6.webp'),
    new Photo('7', '../../assets/img/category-photos/7.webp'),
    new Photo('8', '../../assets/img/category-photos/8.webp'),
    new Photo('9', '../../assets/img/category-photos/9.webp'),
    new Photo('10', '../../assets/img/category-photos/10.webp')
  ];

  categories: PhotoCategory[] = [
    new PhotoCategory('Příroda', '../../assets/img/nature.webp', []),
    new PhotoCategory('Architektura', '../../assets/img/architecture.webp', this.photosForCategory.slice(1, 7)),
    new PhotoCategory('Lidé', '../../assets/img/people.webp', []),
    new PhotoCategory('Jídlo', '../../assets/img/food.webp', []),
    new PhotoCategory('Abstraktní', '../../assets/img/abstract.webp', [])
  ];

  emptyArr: Photo[];
  getCategories() {
    return this.categories.slice();
  }

  categoryName: string
  setCategory(elem: PhotoCategory) {
    this.categoryName = elem.name;
  }

  getCategoryName() {
    return this.categoryName;
  }

  getPhotosOfCategory(name: string) {
    console.log(this.categories)

    for (let i = 0; i < this.categories.length; i++) {
      let c = this.categories[i];
      if (c.name == name) {
        return c.photos
      }
    }
    return this.emptyArr;



  }
}