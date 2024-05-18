import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroImgComponent } from './hero-img/hero-img.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroImgComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projekt';
}
