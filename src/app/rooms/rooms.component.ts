import { Component } from '@angular/core';
import { Rooms,roomList } from './rooms';
import { NgIf, NgFor } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf, NgFor, RoomsListComponent],
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

  roomsList : roomList[] =[{
    roomType : "deluxe",
    amenities : "AC, TV, Bathroom",
    price : 500,
    checkinTime : new Date('20-Mar-2024'),
    checkoutTime : new Date('20-Mar-2024')
  },
  {
    roomType : "deluxe",
    amenities : "AC, TV, Bathroom",
    price : 500,
    checkinTime : new Date('20-Mar-2024'),
    checkoutTime : new Date('20-Mar-2024')
  },
  {
    roomType : "deluxe",
    amenities : "AC, TV, Bathroom",
    price : 500,
    checkinTime : new Date('20-Mar-2024'),
    checkoutTime : new Date('20-Mar-2024')
  }


]
  role = 'admin'
  
  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room : Roomlist){
  console.log(room)
}
