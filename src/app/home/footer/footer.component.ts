import { Component } from '@angular/core'
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'portfolio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faHeart = faHeart
  faArrowUp = faArrowUp
}
