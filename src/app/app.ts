import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { HeroSection } from './hero-section/hero-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  sidebarVisible = false;
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
