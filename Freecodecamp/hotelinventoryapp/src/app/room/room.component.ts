import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'sumit-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  selectedRoom!: RoomList;
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  title: string = "Room list"

  ngOnInit(): void {

  }
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 4,
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Deluxe room",
      amenities: "Air conditioner, Free wifi, TV, Bathroom, kitchen",
      price: 300,
      photos: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1669799.jpg&fm=jpg",
      checkInTime: new Date('11-Nov-2020'),
      checkOutTime: new Date('14-Nov-2020'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: "Deluxe room",
      amenities: "Air conditioner, Free wifi, TV, Bathroom, kitchen",
      price: 1000,
      photos: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1669799.jpg&fm=jpg",
      checkInTime: new Date('11-Nov-2020'),
      checkOutTime: new Date('14-Nov-2020'),
      rating: 4.6
    },
    {
      roomNumber: 3,
      roomType: "Private room",
      amenities: "Air conditioner, Free wifi, TV, Bathroom, kitchen",
      price: 700,
      photos: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1669799.jpg&fm=jpg",
      checkInTime: new Date('11-Nov-2020'),
      checkOutTime: new Date('14-Nov-2020'),
      rating: 4.9
    }
  ]
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditionaer, free wifi, tv, Bathroom, Kitchen',
      price: 500,
      photos: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1669799.jpg&fm=jpg",
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.5
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
  toggle() {
    this.title = "Rooms was there";
  }

}
