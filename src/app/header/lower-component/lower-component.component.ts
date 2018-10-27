import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { ProfileDetail } from '../booking-header/user.model';

@Component({
  selector: 'nb-lower-component',
  templateUrl: './lower-component.component.html',
  styleUrls: ['./lower-component.component.scss'],
  providers: [UserProfileService]
})
export class LowerComponentComponent implements OnInit {
  private _profileDetail: ProfileDetail;
  private _profileRecieved: boolean;
  constructor(private profileService: UserProfileService) { }

  ngOnInit() {
    this.profileDetail = new ProfileDetail();
    this.profileService.getUserImage('babita').subscribe(response => {
      this.profileDetail.displayPic = response.image;
      this.profileRecieved = true;
    }
      , (error) => { });
  }
  public get profileDetail(): ProfileDetail {
    return this._profileDetail;
  }
  public set profileDetail(v: ProfileDetail) {
    this._profileDetail = v;
  }
  public get profileRecieved(): boolean {
    return this._profileRecieved;
  }
  public set profileRecieved(v: boolean) {
    this._profileRecieved = v;
  }
}
