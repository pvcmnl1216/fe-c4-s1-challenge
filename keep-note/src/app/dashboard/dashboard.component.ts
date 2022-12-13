import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note';
import {NOTES} from '../models/notes';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
 
  notes: Note[] = [];
 

  constructor(private noteService:NoteService) {
  }


  onSearchTextChanged(noteName: string) {
    this.noteService.getNotes().subscribe({
      next: data => {
        if (noteName || noteName !== '') {
          this.notes = data.filter(note => note.title?.includes(noteName));
        }
        else
          this.notes = data;
      },
      error: e => {
        alert("Network Error  !! Please Try Again Later");
      }
    })
  }



}