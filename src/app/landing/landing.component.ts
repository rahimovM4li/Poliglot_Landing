import {Component, HostListener, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-landing',
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{


  isNavbarOpen = false;
  showModal = false;
  modalText = '';
  progressWidth = '0%';

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  openModal(text: string): void {
    this.modalText = text;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.progressWidth = (scrollTop / scrollHeight) * 100 + '%';
  }

  ngOnInit(): void {
    const logo = document.getElementById('logo');
    if (logo) {
      logo.style.transform = 'scale(1.1)';
      setTimeout(() => {
        logo.style.transform = 'scale(1)';
      }, 500);
    }
  }

}
