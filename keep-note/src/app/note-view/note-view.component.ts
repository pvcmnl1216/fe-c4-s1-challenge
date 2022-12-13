import { Component, Input, OnInit } from '@angular/core';
import {Note} from '../models/note';
import {NOTES} from '../models/notes'
import { NoteService } from '../note.service';



@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  
  flag=false;
  open(){
    if(this.flag){
      this.flag=false;
    }else{
      this.flag=true;
    }
  }


  notes: Note[] = [];

  constructor(private noteService:NoteService) { }

  search(noteName: string) {
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

  ngOnInit(): void {
    this.noteService.getNotes().subscribe({
      next:data=>{
        this.notes=data;
        // console.log(this.notes)
        // alert("Hello")
      },
      error:e=>{
      alert("Failed to Fetch Blog due to Network Error");
      }
    });
  }


}