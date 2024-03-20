import { Component } from '@angular/core';
import { Rooms } from './rooms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  hotelName = "Hilton Hotel"

  hideRooms = false;

  rooms : Rooms = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5
  };

  role = 'admin'
  
  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
