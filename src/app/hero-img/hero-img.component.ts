import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-hero-img',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-img.component.html',
  styleUrl: './hero-img.component.css'
})
export class HeroImgComponent {

    //Hero Kurser Img
    students1Img: string = "assets/img/CF017231.IIQ.p.jpg";

    //Hero Schema Img
    students2Img: string = "assets/img/CF017233.IIQ.p.jpg";

    //Logotyp 
    logoImg: string = "assets/img/logotyp.svg";

    //Liten logo
    miniLogoImg: string ="assets/img/minilogo.svg"

}
