import { Component } from '@angular/core'
import { faRProject } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'portfolio-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  faRProject = faRProject
  faLaptopCode = faLaptopCode
  faClipboard = faClipboard
}
