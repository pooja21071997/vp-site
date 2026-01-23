import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { fromEvent } from 'rxjs';
import { throttleTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-go-to-top',
  imports: [NgIf],
  templateUrl: './go-to-top.html',
  styleUrl: './go-to-top.css',
})
export class GoToTop implements OnInit, OnDestroy {
  showButton = signal(false);
  private destroy$ = new Subject<void>();

  ngOnInit() {
    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(100),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        this.showButton.set(scrollPosition > 300);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
