import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnDestroy {
  private resizeListener: (() => void) | null = null;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // compute heights after view is ready
    this.setEqualCardHeights();

   
  }

  ngOnDestroy(): void {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  private setEqualCardHeights(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // select all cards from both rows (first and second rows under "Our Values")
    const selector = '.row.mx-5 .card, .row.mx-5.mt-3.mb-3 .card';
    const cards = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!cards.length) return;

    // reset any previous inline min-height so natural height is measured
    cards.forEach(c => c.style.minHeight = '');

    // measure the tallest card
    let max = 0;
    cards.forEach(c => {
      const h = c.offsetHeight;
      if (h > max) max = h;
    });

    // apply the tallest height to all cards
    cards.forEach(c => this.renderer.setStyle(c, 'minHeight', `${max}px`));
  }
}
