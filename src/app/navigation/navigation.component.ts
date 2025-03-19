import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  navItems = ['Home', 'CV', 'Experiences', 'Projects', 'Contact','Compétence'];
  activeItem!: string;
  highlightStyle = { left: '0px', width: '0px' };

  constructor(private router: Router) {}

  //Set highlight based on router url
  ngOnInit() {
    const url = this.router.url;
    if (url === '/home') {
      this.setActive('Home');
    } else if (url === '/cv') {
      this.setActive('CV');
    } else if (url === '/experiences') {
      this.setActive('Experiences');
    } else if (url === '/projects') {
      this.setActive('Projects');
    } else if (url === '/contact') {
      this.setActive('Contact');
    } else if (url === '/competence') {
      this.setActive('Compétence');
    }
  }
  


  setActive(item: string) {
    this.activeItem = item;
    this.updateHighlightPosition();
    //change component when clicking on nav item for angular project
    if (item === 'Home') {
      this.router.navigate(['/home']);
    } else if (item === 'CV') {
      this.router.navigate(['/cv']);
    } else if (item === 'Experiences') {
      this.router.navigate(['/experiences']);
    } else if (item === 'Projects') {
      this.router.navigate(['/projects']);
    } else if (item === 'Contact') {
      this.router.navigate(['/contact']);
    } else if (item === 'Compétence') {
      this.router.navigate(['/competence']);
    }
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
    }, 5); // Small delay for smooth effect
  }
  ngAfterViewInit() {
    this.updateHighlightPosition();
  }
}
