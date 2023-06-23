import { Component, ElementRef, HostListener } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'portfolio-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
})
export class MenuComponent {
  activeButton: string | undefined
  isSticky: boolean = false

  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.activeButton = 'about-me'
  }

  setActiveButton(button: string) {
    this.activeButton = button
  }

  scrollTo(elementId: string) {
    // document.getElementById(elementId)?.scrollIntoView({
    //   behavior: 'smooth',
    // })
    window.scrollTo({
      top: (document.getElementById(elementId)?.offsetTop ?? 0) - 230,
      behavior: 'smooth',
    })
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset

    if (scrollPosition >= 50) {
      this.isSticky = true
    } else {
      this.isSticky = false
    }
  }
}
