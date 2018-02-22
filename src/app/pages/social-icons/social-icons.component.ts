import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      'fbLink': ['', Validators.required],
      'twitterLink': ['', Validators.required],
      'teleLink': ['', Validators.required],
      'linkedinLink': ['', Validators.required],
      'instaLink': ['', Validators.required],
      'redditLink': ['', Validators.required],
      'youtubeLink': ['', Validators.required],
      'bitLink': ['', Validators.required],
    });
   }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    // console.log(this.myForm);
    if (this.myForm.valid) {
      alert('ahh laih chakk');
      console.log(this.myForm.value);
    }
  }
}
