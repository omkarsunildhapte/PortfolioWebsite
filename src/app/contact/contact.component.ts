import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  openEmailClient(emailId: string): void {
    const mailtoUrl = `mailto:${emailId}`;
    window.open(mailtoUrl);
  }
  openPhoneDialer(phoneNumber: string): void {
    const telUrl = `tel:${phoneNumber}`;
    window.open(telUrl);
  }

}
