import { Component, OnInit } from '@angular/core';
import { User, ProfileDetail } from 'src/app/header/booking-header/user.model';

@Component({
  selector: 'nb-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public User: User;
  public _img: any;
  constructor() {
    this.User = new User();
    const profileDetil =  new ProfileDetail();
    this.User.profileDetails = profileDetil;
  }

  ngOnInit() {
  }

  public onFileChange(event: any) {
    const file = event.target.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.User.profileDetails.displayPic = (<string>myReader.result).split(',')[1];
    };
    myReader.readAsDataURL(file);
  }
}
