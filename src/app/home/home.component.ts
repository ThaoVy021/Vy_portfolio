import { Component, HostListener } from '@angular/core'

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // currentSection = 'about-me'

  // onSectionChange(sectionId: string) {
  //   this.currentSection = sectionId
  // }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    //console.log('scrollPosition', scrollPosition)
    const navButtons = document.querySelectorAll(
      '#scrollspy-nav button',
    ) as NodeListOf<HTMLButtonElement>

    console.log('navButtons', navButtons)

    navButtons.forEach((button: HTMLButtonElement, index: number) => {
      const section = document.querySelector(
        `#${button.dataset['section']}`,
      ) as HTMLElement
      const realOffsetTop = section?.offsetTop

      const isBottom =
        scrollPosition + window.innerHeight === document.body.scrollHeight

      if (isBottom) {
        if (index === navButtons.length - 1) {
          button.classList.add('active')
        } else {
          button.classList.remove('active')
        }
      } else if (
        realOffsetTop <= scrollPosition &&
        realOffsetTop + section.offsetHeight > scrollPosition
      ) {
        button.classList.add('active')
      } else {
        button.classList.remove('active')
      }
    })
  }
}
