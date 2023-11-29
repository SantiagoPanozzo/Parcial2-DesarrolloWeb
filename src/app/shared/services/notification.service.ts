import { Injectable } from '@angular/core';
import { INotification } from '../interfaces/INotification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  
  public notifications : INotification[] = [];

  public notify(noti: INotification): void {
    this.notifications.push(noti);
  }

  public clear(): void {
    this.notifications = [];
  }

  public remove(message: string): void {
    const index = this.notifications.findIndex((noti) => noti.message === message);
    this.notifications.splice(index, 1);
  }
}
