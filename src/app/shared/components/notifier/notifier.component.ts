import { Component } from '@angular/core';
import { INotification } from '../../interfaces/INotification';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent {
  
    constructor(
      public notificationService: NotificationService,
    ) { }
  
    ngOnInit(): void {
    }
}
