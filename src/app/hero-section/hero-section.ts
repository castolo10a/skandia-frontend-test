import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  handleGoCards = ()=> {
    alert('debe llevar a la seccion de las cards')
  }
}
