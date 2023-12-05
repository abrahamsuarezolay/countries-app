import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = "Search by"

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter()

  sendOnValue = (value: string):void => {
    this.onValue.emit(value)
  }

}
