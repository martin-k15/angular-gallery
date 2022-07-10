import { Photo } from "./photo.module";

export class PhotoCategory{
    name: string;
    previewPhotoPath: string;
    photos: Photo[];

    constructor(name: string, previewPhotoPath: string, photos: Photo[]){
        this.name = name;
        this.previewPhotoPath = previewPhotoPath;
        this.photos = photos;
    }

}


