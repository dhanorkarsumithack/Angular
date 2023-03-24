import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  // @Input('tot') all:number=0;
  @Input() all:number =0;
  @Input() free:number=0;
  @Input() premium:number=0;

  selectedRadioButtonValue:string='all';
  
  @Output()
  filterRadioButtonSelectionChange:EventEmitter<string>=new EventEmitter<string>;  
  onRadioButtonSelectionChange(){
    this.filterRadioButtonSelectionChange.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue);
  }

}
