import { Component, OnInit } from '@angular/core';
import { LogginginService } from '../loggingin.service';

@Component({
  selector: 'nb-loggingin',
  templateUrl: './loggingin.component.html',
  styleUrls: ['./loggingin.component.scss'
            ],
  providers: [LogginginService]
})
export class LogginginComponent implements OnInit {

  constructor(private loggingService: LogginginService) {
    this.username = 'neeraj';
  }
  public reaction: string;
  public username: string;
  ngOnInit() {
    this.loggingService.doLogin(this.username).subscribe(response => {
      this.reaction = response;
    }, error => { this.reaction = 'error'; });
  }
  onKey($evt) {
    this.username = $evt.target.value;
  }
  doLogin() {
    this.loggingService.doLogin(this.username).subscribe(response => {
      this.reaction = response;
    }, error => { this.reaction = 'error'; });
  }
}
