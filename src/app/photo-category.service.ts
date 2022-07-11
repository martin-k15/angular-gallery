import { PhotoCategory } from "./photo-category.module";
import { Photo } from "./photo.module";

export class PhotoCategoryService{
    categories: PhotoCategory[] = [
        new PhotoCategory('Příroda', '../../assets/img/nature.webp',[]),
        new PhotoCategory('Architektura', '../../assets/img/architecture.webp', [new Photo('a', './../assets/img/icons8-plus.svg'), new Photo('a', './../assets/img/icons8-plus.svg')]),
        new PhotoCategory('Lidé', '../../assets/img/people.webp', []),
        new PhotoCategory('Jídlo', '../../assets/img/food.webp', []),
        new PhotoCategory('Abstraktní', '../../assets/img/abstract.webp', [])
      ];


      getCategories(){
        return this.categories.slice();
      }
}