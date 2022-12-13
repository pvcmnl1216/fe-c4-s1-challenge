import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../app/models/note';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
  URL: string = "http://localhost:3000/notes";
  constructor(private http: HttpClient) { }

  getNotes(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(this.URL);
  }

  addNote(note: Note) {
    return this.http.post<Note>(this.URL, note);
  }
}