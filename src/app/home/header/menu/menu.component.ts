import { Component, HostListener } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { BehaviorSubject } from 'rxjs'

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

  ngOnInit() {
    this.activeButton = 'home' // Set the default active button to 'home'
  }

  setActiveButton(button: string) {
    this.activeButton = button
  }

  // scrollToElement($element: any): void {
  //   console.log($element)
  //   $element.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //     inline: 'nearest',
  //   })
  // }

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
