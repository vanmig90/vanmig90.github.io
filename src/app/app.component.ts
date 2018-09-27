import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ATS';
  selectedIndex:number=0;

  accounts:any = [];
  url:string;



  constructor()
  {
    this.url=null;
    for(var i=0;i<40;i++)
    {

this.accounts.push({
  id:i,
  name:"Sun TV",
  type:"Movies"
});
  
    }
  }

  gotoNewPost()
  {
    this.selectedIndex = 2;  
  }
loadMessages(accountId:any)
{
  this.selectedIndex = 1;
  
}

readUrl(event:any) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (event:any) => {
      this.url = event.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
  }
}
}
