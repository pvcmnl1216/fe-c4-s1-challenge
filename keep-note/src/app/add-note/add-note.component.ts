import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';
import { NoteService } from '../note.service';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {

  note: Note = {};

  @Output()
  addNote:EventEmitter<Note>=new EventEmitter<Note>();

  constructor(private noteService:NoteService) { }
 

  saveNotes(){
   
    if (this.note.title)
    this.noteService.addNote(this.note).subscribe({
      next:data=>{
        this.addNote.emit(this.note);
        alert("Note Added Successfully");
        this.note={};
      },
      error:e=>{
        alert("Failed to Fetch Blog due to Network Error");
      }
    });
  }



}
