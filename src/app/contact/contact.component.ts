import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailfeatureService } from '../comman/servies/emailFeatures/emailfeature.service';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../comman/dataStore/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailfeatureService,
    private toastr: ToastrService,
    private fireData: DataService
  ) { }

  openEmailClient(emailId: string): void {
    const mailtoUrl = `mailto:${emailId}`;
    window.open(mailtoUrl);
  }

  openPhoneDialer(phoneNumber: string): void {
    const telUrl = `tel:${phoneNumber}`;
    window.open(telUrl);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      message: ['']
    });
  }

  submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.sendData(formData);
      // this.emailService.sendEmail(formData).subscribe(
      //   () => {
      //       this.toastr.success('Email sent successfully!', 'Success');
      //   },
      //   (error) => {
      //     this.toastr.error('Failed to send email', 'Error');
      //   }
      // );
    } else {
      this.toastr.error('Please fill in all required fields.', 'Error');
    }
  }
  sendData(data: any): void {
    this.fireData.addItem(data)
      .then(() => {
        console.log('Item added successfully!');
      })
      .catch((error) => {
        console.error('Error adding item:', error);
      });
  }
}