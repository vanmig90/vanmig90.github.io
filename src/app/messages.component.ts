import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'message-list',
  templateUrl: './messages.component.html'
  
})
export class MessageListComponent {

    MESSAGES: Message[] = [
        {message:"blah blah",postedBy: "Portus", postedAt:new Date()},
      ]

      displayedColumns = [ "message","postedBy","postedAt"];

      messages = new MatTableDataSource<Message>(this.MESSAGES);
      @ViewChild(MatPaginator) paginator: MatPaginator;
      
      ngAfterViewInit() {
        this.messages.paginator = this.paginator;
      }

      
  constructor()
  {
    for(var i=0;i<40;i++)
    {
      this.MESSAGES.push(  {message:"blah blah",postedBy: "Portus", postedAt:new Date()});
    }
}

}
export interface Message {
    message:string,
    postedBy: string;
    postedAt: Date;
  }
  