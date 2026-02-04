import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  aboutText =
    `Vivekanand Pratishthan has a unique approach to education.
     Instead of focusing solely on slates, notebooks, and books,
     our concept is more similar to the ancient ‘Gurukul’ system of India.`;

  address = '66, Suyog Colony, Jalgaon 425001';
  phone = '0257-2239014';
  email = 'contact@vivekanandpratishthan.com';

  socialLinks: SocialLink[] = [
    { icon: 'fa-facebook-f', url: '#', label: 'Facebook' },
    { icon: 'fa-instagram', url: '#', label: 'Instagram' },
    { icon: 'fa-youtube', url: '#', label: 'YouTube' },
  ];

  currentYear = new Date().getFullYear();
}
