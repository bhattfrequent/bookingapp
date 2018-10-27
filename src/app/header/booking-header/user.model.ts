export class User {
  private _name: string;
  private _password: string;
  public get Name(): string {
    return this._name;
  }
  public set Name(value: string) {
    this._name = value;
  }
  public get Password(): string {
    return this._password;
  }
  public set Password(value: string) {
    this._password = value;
  }
  private _Age: number;
  public get Age(): number {
    return this._Age;
  }
  public set Age(v: number) {
    this._Age = v;
  }

  private _sex: string;
  public get sex(): string {
    return this._sex;
  }
  public set sex(v: string) {
    this._sex = v;
  }

  private _mobileNumber: number;
  public get mobileNumber(): number {
    return this._mobileNumber;
  }
  public set mobileNumber(v: number) {
    this._mobileNumber = v;
  }
  private _profileDetail: ProfileDetail;
  public get profileDetails(): ProfileDetail {
    return this._profileDetail;
  }
  public set profileDetails(v: ProfileDetail) {
    this._profileDetail = v;
  }

}

export class ProfileDetail {
  private _displayPic: any;
  public get displayPic(): any {
    return this._displayPic;
  }
  public set displayPic(v: any) {
    this._displayPic = v;
  }
}
