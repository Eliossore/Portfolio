import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  navItems = ['Home', 'CV', 'Experiences', 'Projects', 'Contact'];
  activeItem = 'Home';
  highlightStyle = { left: '0px', width: '0px' };

  setActive(item: string) {
    this.activeItem = item;
    this.updateHighlightPosition();
  }

  @HostListener('window:resize')
  updateHighlightPosition() {
    setTimeout(() => {
      const activeEl = document.querySelector('.navbar ul .active') as HTMLElement;
      if (activeEl) {
        this.highlightStyle = {
          left: `${activeEl.offsetLeft}px`,
          width: `${activeEl.offsetWidth}px`
        };
      }
    }, 100); // Small delay for smooth effect
  }

  ngAfterViewInit() {
    this.updateHighlightPosition();
  }
}
