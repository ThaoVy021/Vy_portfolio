import { Component, TemplateRef, Input } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
})
export class ContactComponent {
  faHeart = faHeart
  constructor(private notification: NzNotificationService) {}

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
