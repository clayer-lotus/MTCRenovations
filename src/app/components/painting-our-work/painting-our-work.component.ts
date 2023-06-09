import { Component } from '@angular/core';
interface Image {
  url: string;
  caption?: string;
}
@Component({
  selector: 'app-painting-our-work',
  templateUrl: './painting-our-work.component.html',
  styleUrls: ['./painting-our-work.component.css']
})
export class PaintingOurWorkComponent {
  images: Image[] = [
    { url: '../../../assets/img/painting/our-work/IMG_9445.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_9446.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/painting/our-work/IMG_9447.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/painting/our-work/IMG_9448.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_9449.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/painting/our-work/IMG_9450.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/painting/our-work/IMG_9451.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_9459.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/painting/our-work/IMG_9466.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/painting/our-work/IMG_9470.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_9479.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_9481.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_9483.jpg', caption: 'Image 4' },

    
    { url: '../../../assets/img/flooring/our-work/IMG_9632.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/flooring/our-work/IMG_9633.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/flooring/our-work/IMG_9634.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/flooring/our-work/IMG_9638.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/flooring/our-work/IMG_9640.jpg', caption: 'Image 1' },


    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-04.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-08.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-09.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-10.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-13.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-15.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-20.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-26.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-28.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-30.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-31.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-32.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-34.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-41.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-43.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-50.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-51.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-62.jpg', caption: 'Image 31' },
   
    { url: '../../../assets/img/painting/our-work/screenshot-1.png', caption: 'Image 14' },
    { url: '../../../assets/img/painting/our-work/screenshot-2.png', caption: 'Image 15' },

    { url: '../../../assets/img/painting/our-work/virtual-tour-318929-mls-high-res-image-43.jpg', caption: 'Image 25' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-01.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-22.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-24.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-48.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-54.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-28.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-43.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-55.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-333305-mls-high-res-image-21.jpg', caption: 'Image 32' },
   
    
  ];

  selectedImage!: any;

  openModal(image: any): void {
    this.selectedImage = image;
  }

}
