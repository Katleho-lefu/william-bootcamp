import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  data: any;
  


  constructor(private myServer: ServerService) { }

  ngOnInit(): void {
    
    this.myServer.getApi().subscribe(data=>console.log(data))

    // this.myServer.getApi().subscribe((data: any[]) => {
  
    //   data.forEach((value) => {
    //     console.log(value.Title);
    //   });
    // });


  }
}