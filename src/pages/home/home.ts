import { Note } from './../../models/note.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddNotePage } from '../add-note/add-note';
import { ViewNotePage } from './../view-note/view-note';
import { NoteService } from './../../providers/note-service/note-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: Promise<Note[]>;
  note: Note;

  constructor(public navCtrl: NavController,
    private noteService: NoteService) {

  }

  ionViewWillEnter(){
    this.notes = this.getAllNotes();
  }

  addNote() {
    this.navCtrl.push(AddNotePage);
  }

  getNote(createDate: number) {
    this.noteService.getNote(createDate).then(
      (note: Note) => {
        this.note = note;
        this.navCtrl.push(ViewNotePage, { note: this.note });
      }
    );
  }

  getAllNotes() {
    return this.noteService.getAllNotes();
  }

}
