import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RoomList, Rooms } from '../rooms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent {
  @Input() rooms : RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room : RoomList){
    this.selectedRoom.emit(room)
  }

}
