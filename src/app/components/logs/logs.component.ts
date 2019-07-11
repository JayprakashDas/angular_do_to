import { Component, OnInit } from '@angular/core';
import {Log} from '../../models/logs'
import {LogService} from '../../services/log.service'
import { observable } from 'rxjs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

 logs: Log[]

//  mandatory when u bring some service put it in private
  constructor(private logService: LogService) { }

  ngOnInit() {
    //logs are coming from the log service
    // now inn the service used observable
   this.logService.getLogs().subscribe(logs=>{
     this.logs=logs;
   })

  }
//Select and send to the form setFormLog/

//now in order to track and show the change we have to listend and suscribe
// to the log form 
  onSelect(log:Log) {
    this.logService.setFormLog(log);
  }

}
