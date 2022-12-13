import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  titleName: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  searchNotes() {
    this.searchTextChanged.emit(this.titleName);
  }

  clearNotes() {
    this.titleName = "";
    this.searchTextChanged.emit(this.titleName);
  }


}