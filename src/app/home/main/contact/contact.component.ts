import {
  Component,
  TemplateRef,
  Input,
  ElementRef,
  HostListener,
} from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
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
export class ContactComponent {
  faHeart = faHeart
  constructor(
    private notification: NzNotificationService,
    private el: ElementRef,
  ) {}
  isVisible = 'hide'

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

  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template)
  }

  scrollTo(elementId: string) {
    window.scrollTo({
      top: document.getElementById(elementId)?.offsetTop,
      behavior: 'smooth',
    })
  }

  public sendEmail(e: Event) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_8nkluuv',
        'template_c88bulx',
        e.target as HTMLFormElement,
        'TfCNvt2NA1i2ZcpTA',
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.createBasicNotification
        },
        (error) => {
          console.log(error.text)
        },
      )
  }
}
