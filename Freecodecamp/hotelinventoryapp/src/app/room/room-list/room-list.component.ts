import { ChangeDetectionStrategy, Component, EventEmitter, Input,  OnChanges,  OnInit,  Output, SimpleChanges } from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'sumit-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit, OnChanges  {
    @Input() rooms:RoomList[]=[];

    @Input() title:string='';

    @Output() selectedRoom=new EventEmitter<RoomList>;

    selectRoom(room:RoomList){
        this.selectedRoom.emit(room);
    }

    ngOnInit(): void {
        
    }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    if(changes['title']){
      this.title=changes['title'].currentValue.toUpperCase();
    }
  }
}
