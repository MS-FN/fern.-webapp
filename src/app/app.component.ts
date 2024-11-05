import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroSectionComponent} from './components/home/hero-section/hero-section.component';
import {NavbarComponent} from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fern-webapp';
}
