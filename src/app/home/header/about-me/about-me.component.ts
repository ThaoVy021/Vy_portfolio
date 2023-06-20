import { Component, HostListener } from '@angular/core'

@Component({
  selector: 'portfolio-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  scrollTo(elementId: string) {
    window.scrollTo({
      top: document.getElementById(elementId)?.offsetTop,
      behavior: 'smooth',
    })
  }
}
