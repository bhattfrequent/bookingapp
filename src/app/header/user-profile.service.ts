import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './booking-header/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private url = 'http://127.0.0.1:5000/getprofilepicture';
  private uploadUrl = 'http://127.0.0.1:5000/uploadprofile';
  constructor(private client: HttpClient) {}
  public getUserImage(user: string): Observable<any> {
    const urlFinal = `${this.url}?username=${user}`;
    return this.client.get(urlFinal);
  }
  public uploadProfile(userProfile: User): Observable<User> {
    return this.client.post<User>(this.uploadUrl, userProfile);
  }
}
