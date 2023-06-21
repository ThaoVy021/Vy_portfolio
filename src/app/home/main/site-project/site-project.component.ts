import { Component, ElementRef, HostListener } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'portfolio-site-project',
  templateUrl: './site-project.component.html',
  styleUrls: ['./site-project.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        }),
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateY(100%)',
        }),
      ),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-out')),
    ]),
  ],
})
export class SiteProjectComponent {
  isVisible = 'hide'
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition - 650) {
      this.isVisible = 'show'
    } else {
      this.isVisible = 'hide'
    }
  }
}
