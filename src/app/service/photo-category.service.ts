import { Route } from "@angular/router";
import { PhotoCategory } from "../photo-category.module";
import { Photo } from "../photo.module";
import { PhotosListComponent } from "../photos-list/photos-list.component";



export class PhotoCategoryService {

  photosForCategory: Photo[] = [
    new Photo('https://www.gstatic.com/webp/gallery/1.webp'),
    new Photo('https://www.gstatic.com/webp/gallery/2.webp'),
    new Photo('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSfdnzDX7kCjYqW4kE9VQ8Bb4QteDeeVb81La2NJgVAkRl7gKTMUOETe3DmzMk1jMcvuI&usqp=CAU'),
    new Photo('https://www.gstatic.com/webp/gallery/4.webp'),
    new Photo('https://www.gstatic.com/webp/gallery/5.webp'),
    new Photo('https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg?w=2000'),
    new Photo('https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?t=st=1657554619~exp=1657555219~hmac=2800c31ea6ada3f51d4477a1e1828672945fc72742975a078adcc1b739194c36&w=740'),
    new Photo('https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-woman-casual-summer-jeans-clothes-hugging_158538-5500.jpg?t=st=1657554529~exp=1657555129~hmac=6c37be25e2751aa0c15612fad3d6732d181cdc7ce0192791cbea69888d35171d&w=740'),
    new Photo('https://img.freepik.com/free-photo/soccer-into-goal-success-concept_1150-5276.jpg?t=st=1657554553~exp=1657555153~hmac=8f2f8ad17adf44b945a6198f40e30b38b93886cd3f98012779e746d2cc0a5bd2&w=740')
  ];

  categories: PhotoCategory[] = [
    new PhotoCategory('Nature', 'https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp', this.photosForCategory.slice(0, 1)),
    new PhotoCategory('Architecture', 'https://www.2020architekti.cz/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/02/NZ_RadoveDomy_06-1024x576.jpg.webp', this.photosForCategory),
    new PhotoCategory('People', 'https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028__340.jpg', this.photosForCategory.slice(1, 4)),
    new PhotoCategory('Food', 'https://d39-a.sdn.cz/d_39/c_img_gY_d/8uPL.jpeg?fl=cro,0,156,3000,1687%7Cres,1200,,1%7Cwebp,75', this.photosForCategory.slice(1, 3)),
    new PhotoCategory('Abstract', 'https://expertphotography.b-cdn.net/wp-content/uploads/2018/03/abstract-photography.1.jpg', this.photosForCategory.slice(1, 6))
  ];


  generatePhotos() {
    let index = 0;
    while (index < 10) {
      let photoPath: string = this.getRandomUrlPath();
      this.photosForCategory.push(new Photo(photoPath));
      index++;
    }
  }

  addToRoutes(r: Route[]) {
    //r.push( {path: 'categories/Food', component: PhotosListComponent})
  }

  getCategoriesArray() {
    this.generatePhotos();
    return this.categories.slice();
  }


  categoryName: string;
  setCategory(elem: PhotoCategory) {
    this.categoryName = elem.name;
    this.saveData()
  }


  getCategoryName() {
    const val = localStorage.getItem('C-NAME');
    console.log("Znám val..? " + val)
    if (val) {
      return val
    }
    return 'nope';
  }

  getPhotos() {
    const val = localStorage.getItem('C-P');
    if (val){
      return JSON.parse(val);
    }
  }

  toAddNewCategory(name: string) {
    console.log("New name category: " + name)
    let newPhotoPath: string = this.getRandomUrlPath();
    this.categories.push(new PhotoCategory(name, newPhotoPath, []));
  }

  getRandomUrlPath() {
    let numWidth = Math.floor(Math.random() * (660 - 650 + 1)) + 650;
    let numHeight = Math.floor(Math.random() * (400 - 390 + 1)) + 390;
    let newPhotoPath: string = 'https://picsum.photos/' + numWidth.toString() + '/' + numHeight.toString();
    return newPhotoPath;
  }



  saveData() {
    localStorage.setItem('C-NAME', this.categoryName);
    localStorage.setItem('C-P', JSON.stringify(this.categories.find(c => c.name === localStorage.getItem('C-NAME'))?.photos as Photo[]))
  }

}