"use strict";
// import { storageService } from './storage-service.js';
import utilService from "../service/util-service.js";
import storageService from "../service/storage-service.js";

const NOTES_KEY = "notes";
var notes = [];

function quary(filter = null) {
  
  return storageService.load(NOTES_KEY).then(notes => {
    if (!notes || !notes.length) {
      notes = _generateNotes();
      storageService.store(NOTES_KEY, notes);
    }
    if(!filter) {
      return notes;
    } else {
    var filterdNotes =  notes.filter(note => {
      console.log(note.data.title)
      console.log(filter);
      
      return note.data.title.toUpperCase().includes(filter.byTxt.toUpperCase()) ||
      note.data.txt.toUpperCase().includes(filter.byTxt.toUpperCase()) 
    })
      if (filter.byType === 'all') return filterdNotes;
      console.log(filterdNotes);
      
      return filterdNotes.filter(note => {
        console.log(note);
        
        return filter.byType === note.type;
      })
    }
  });
}


function deleteNote(noteId) {
  return storageService.load(NOTES_KEY)
      .then(notes => {
          var noteIdx = notes.findIndex(note => note.data.id === noteId);
          notes.splice(noteIdx, 1);
          storageService.store(NOTES_KEY, notes);
          return notes;
        })
}

function getNoteById(noteId) {
  return quary().then(notes => {
    return notes.find(note => {
      return note.data.id === noteId;
    });
  });
}

function saveNote(note) {
  quary().then(notes => {
    if (note.data.id) {
      var noteIdx = notes.findIndex(currNote => currNote.data.id === note.data.id)
      notes.splice(noteIdx, 1, note);
    } else {
      note.data.id = utilService.makeId();
      notes.push(note);
  }
  return storageService.store(NOTES_KEY, notes);
});
}

export const keepService = {
  quary,
  getNoteById,
  saveNote,
  deleteNote
};



function _generateNotes() {
  var notesNew = [
    {
      type: "txtNote",
      data: {
        id: utilService.makeId(),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        txt: "txt 1",
        title: "1",
        isPinned: false,
        color: 'red',
        backgroundColor: 'black'
      }
    },
    {
      type: "imgNote",
      data: {
        id: utilService.makeId(),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        url: "img/1.jpg",
        title: "me1",
        txt: "When old",
        isPinned: false,
        color: 'red',
        backgroundColor: 'white'
      }
    },
    {
      type: "txtNote",
      data: {
        id: utilService.makeId(),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        title: "me",        
        txt: "txt 2",
        isPinned: false,
        color: 'white',
        backgroundColor: 'black'
      }
    },
    {
      type: "imgNote",
      data: {
        id: utilService.makeId(),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        url: "img/2.jpg",
        title: "2",
        txt: "When old",
        isPinned: false,
        color: 'red',
        backgroundColor: 'black'
      }
    }
  ];
  return notesNew;
}
