import { Component, OnInit } from '@angular/core';
import { User, ProfileDetail} from './user.model';
import { UserProfileService } from '../user-profile.service';


@Component({
  selector: 'nb-booking-header',
  templateUrl: './booking-header.component.html',
  styleUrls: ['./booking-header.component.scss',
              ]
})
export class BookingHeaderComponent implements OnInit {

  constructor(private userProfileService: UserProfileService) { }
  public _username: string;
  private _user: User;
  private _img: any;
  ngOnInit() {
    this._user = new User();
    this.User.Name = 'neeraj';
    this.User.Age = 18;
    this.userProfileService.getUserImage('neeraj').subscribe(data => {
      this._img = data.image;
    });
  }

  get User(): User {
    return this._user;
  }
  onLoginClick = () => {
    // alert('Password is ' + this.User.Password);
    const profileDetails: ProfileDetail = new ProfileDetail();
    profileDetails.displayPic = this._img;
    this.User.profileDetails = profileDetails;
    this.userProfileService.uploadProfile(this.User)
    .subscribe(x => {
    },
    err => {
      alert('error');
    });
  }

  public onFileChange(event: any) {
    const file = event.target.files[0];
    const profileDetails: ProfileDetail = new ProfileDetail();

    this.User.profileDetails = profileDetails;
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this._img = (<string>myReader.result).split(',')[1];
    };
    myReader.readAsDataURL(file);
  }
}
