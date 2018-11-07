"use strict";
// import { storageService } from './storage-service.js';
import utilService from "../service/util-service.js";
import storageService from "../service/storage-service.js";

const NOTES_KEY = "notes";
var notes = [];

function quary() {
  return storageService.load(NOTES_KEY).then(notes => {
    if (!notes || !notes.length) {
      notes = generateNotes();
      storageService.store(NOTES_KEY, notes);
    }
    return notes;
  });
}

function generateNotes() {
  var notesNew = [
    {
      type: "txtNote",
      data: {
        id: utilService.makeId(),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        txt: "txt 1",
        title: "1",
        isPinned: false
      }
    },
    {
      type: "imgNote",
      data: {
        id: utilService.makeId(),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        imgUrl: "img/1.jpg",
        imgTitle: "me",
        txt: "When old",
        isPinned: false
      }
    },
    {
      type: "txtNote",
      data: {
        id: utilService.makeId(),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        txt: "txt 2",
        isPinned: false
      }
    },
    {
      type: "imgNote",
      data: {
        id: utilService.makeId(),
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        imgUrl: "img/2.jpg",
        imgTitle: "me",
        txt: "When old",
        isPinned: false
      }
    }
  ];
  return notesNew;
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
    notes.push(note);
    storageService.store(NOTES_KEY, notes);
  });
}

export const keepService = {
  quary,
  getNoteById,
  saveNote
};
