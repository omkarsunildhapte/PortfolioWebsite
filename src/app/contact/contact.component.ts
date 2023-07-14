import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailfeatureService } from '../comman/servies/emailFeatures/emailfeature.service';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../comman/servies/dataStore/data.service';

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
    private toaster: ToastrService,
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
      phoneNumber: ['', [Validators.pattern('[0-9]{10}')]],
      message: ['']
    });
  }

  submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.sendData(formData);
      this.form.reset();
    } else {
      this.toaster.error('Please fill in all required fields.', 'Error');

      Object.keys(this.form.controls).forEach((controlName) => {
        const control = this.form.get(controlName)!;
        if (control.invalid) {
          const errorMessage = `Invalid ${controlName.replace(/_/g, ' ')}`;
          this.toaster.error(errorMessage, 'Error');
        }
      });

      this.form.reset();
    }
  }
  sendData(data: any): void {
    this.fireData.addItem(data)
      .then(() => {
        this.toaster.success('Successfully Data Sent');
      })
      .catch((error) => {
        this.toaster.error('Error sending data', 'Error');
        console.error('Error sending data:', error);
      });
  }

}