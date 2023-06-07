import { Component } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

@Component({
  selector: 'portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault()
    console.log('sendEmail')
    emailjs
      .sendForm(
        'service_8nkluuv',
        'template_c88bulx',
        e.target as HTMLFormElement,
        'TfCNvt2NA1i2ZcpTA',
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }
}
