import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  path: string;
  exact?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,        // 👈 REQUIRED for *ngFor, *ngIf
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navItems: NavItem[] = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about' },
    { label: "Founder's Message", path: '/founder-message' },
    { label: 'Management', path: '/management' },
    { label: 'Institutes', path: '/institutes' },
    { label: 'Initiatives', path: '/initiatives' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
  ];
}
