import { Component, ViewChild } from '@angular/core';
import { Message } from './models';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  @ViewChild(AlertComponent) alert: AlertComponent;
  
  success(){
    //Saved successfully show the message
    var msg: Message ={ message: 'Saved successfully!', status: true };
    this.alert.show(msg);
  }

  failed(){
    //Saved failed show the error message
    var msg: Message ={ message: 'Failed to save!', status: false }
    this.alert.show(msg);
  }
}
