'use strict'
// import { storageService } from './storage-service.js';
import  utilService from '../service/util-service.js';


var notes= []

function quary(){
    generateNotes()
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(notes);
        }, 1000)
    });
}

function generateNotes() {
    notes =  [
        {
            type :'txtNote',
            data: {
                id : utilService.makeId(),
                time :  moment().format('MMMM Do YYYY, h:mm:ss a'),            
                txt : 'txt 1',
            }
        },
        {
            type: 'imgNote',
            data: {
                id : utilService.makeId(),
                time :  moment().format('MMMM Do YYYY, h:mm:ss a'),
                imgUrl : 'img/1.jpg',
                imgTitle : 'me',
                txt : 'When old',
            }
        },
        {
            type :'txtNote',
            data: {
                id : utilService.makeId(),
                time :  moment().format('MMMM Do YYYY, h:mm:ss a'),            
                txt : 'txt 2',
            }
        },
        {
            type: 'imgNote',
            data: {
                id : utilService.makeId(),
                time :  moment().format('MMMM Do YYYY, h:mm:ss a'),
                imgUrl : 'img/2.jpg',
                imgTitle : 'me',
                txt : 'When old',
            }
        },
    ];
}

function getNoteById(noteId){
    console.log(notes);
    
    var note = notes.find( note => {
        console.log(note);
        
        return note.data.id = noteId;
    })
    return Promise.resolve(note)
}

export const keepService = {
    quary,
    getNoteById
}