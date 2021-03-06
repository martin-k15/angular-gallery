import { Photo } from "./photo.module";

export class PhotoCategory {
    name: string;
    previewPhotoPath: string;
    photos: Photo[];
    nameDescriptionByNumber: string;

    constructor(name: string, previewPhotoPath: string, photos: Photo[]) {
        this.name = name;
        this.previewPhotoPath = previewPhotoPath;
        this.photos = photos;
        this.nameDescriptionByNumber = this.getNameDesc(photos.length)

    }

    getNameDesc(lenArr: number) {
        if (lenArr == 1) {
            return ('photo');
        } else {
            return ('photos')
        }
    }
}
