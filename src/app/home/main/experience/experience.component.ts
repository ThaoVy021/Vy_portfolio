import { Component } from '@angular/core'
import { faReact, faAngular } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowLeft,
  faArrowRight,
  faMobileScreen,
  faPaintbrush,
} from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

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
})
export class ExperienceComponent {
  faArrowLeft = faArrowLeft
  faArrowRight = faArrowRight
  faMobileScreen = faMobileScreen
  faPaintbrush = faPaintbrush
  faReact = faReact
  faAngular = faAngular

  // slideConfig = { slidesToShow: 4, slidesToScroll: 4 }

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
  ]
  slideConfig = { slidesToShow: 3, slidesToScroll: 3 }
}
