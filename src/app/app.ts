import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from "./components/shared/footer/footer";
import { GoToTop } from "./shared/go-to-top/go-to-top";
@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Footer, GoToTop],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <app-go-to-top></app-go-to-top>
    `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vp-site');
}
