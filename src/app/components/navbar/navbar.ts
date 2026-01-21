import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink], 
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  private sub!: Subscription;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    // Only run in browser environment, not on server
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // run once and on every navigation end
    this.handleActiveLinks(this.router.url);
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e) => {
        const navUrl = (e as NavigationEnd).urlAfterRedirects;
        this.handleActiveLinks(navUrl);
      });
  }

  private handleActiveLinks(currentUrl: string) {
    // select all anchor elements that have routerLink (keeps HTML unchanged)
    // The attribute 'routerLink' is present in the template; at runtime the DOM anchor
    // usually has href set to the path (e.g., "/about"), so check both.
    const links = document.querySelectorAll<HTMLAnchorElement>('a.nav-link');

    links.forEach(link => {
      // Try to determine the path represented by this link:
      // prefer href, then routerLink attribute, then the text content fallback.
      const href = link.getAttribute('href') || link.getAttribute('routerLink') || '';
      // Normalize both to compare only path part (strip query/fragment)
      const linkPath = (href.split('?')[0].split('#')[0]).replace(/\/+$/, '') || '/';
      const normalizedCurrent = (currentUrl.split('?')[0].split('#')[0]).replace(/\/+$/, '') || '/';

      // For home route we want exact match
      const isActive = (linkPath === normalizedCurrent);

      if (isActive) {
        this.renderer.addClass(link, 'active');
      } else {
        this.renderer.removeClass(link, 'active');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  menuOpen: boolean = false;
}
