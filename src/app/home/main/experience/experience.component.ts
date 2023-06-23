import { Component, ElementRef, HostListener, ViewChild } from '@angular/core'
import { faReact, faAngular } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowLeft,
  faArrowRight,
  faMobileScreen,
  faPaintbrush,
  faDiamond,
  faWater,
} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { SlickCarouselComponent } from 'ngx-slick-carousel'
import { trigger, state, style, animate, transition } from '@angular/animations'

interface IExperiences {
  icon: IconProp
  color: string
  name: string
  years: string
}

@Component({
  selector: 'portfolio-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
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
export class ExperienceComponent {
  faArrowLeft = faArrowLeft
  faArrowRight = faArrowRight
  faMobileScreen = faMobileScreen
  faPaintbrush = faPaintbrush
  faReact = faReact
  faAngular = faAngular
  faDiamond = faDiamond
  faWater = faWater

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

  effect = 'scrollx'
  experiences: IExperiences[] = [
    {
      icon: faMobileScreen,
      color: 'bg-[#4AC3CA]',
      name: 'Web App Development',
      years: '2+',
    },

    {
      icon: faPaintbrush,
      color: 'bg-[#9c19c9]',
      name: 'UI/UX',
      years: '2+',
    },

    {
      icon: faReact,
      color: 'bg-[#FFAF00]',
      name: 'ReactJS',
      years: '1+',
    },

    {
      icon: faAngular,
      color: 'bg-[#FF4E6E]',
      name: 'Angular',
      years: '1',
    },
    {
      icon: faDiamond,
      color: 'bg-[#a5dc86]',
      name: 'Ant-design',
      years: '1+',
    },
    {
      icon: faWater,
      color: 'bg-[#f0bf79]',
      name: 'Tailwind CSS',
      years: '1+',
    },
  ]
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent

  next() {
    this.slickModal.slickNext()
  }

  prev() {
    this.slickModal.slickPrev()
  }
}
