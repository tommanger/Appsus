import storageService from './storage-service.js'

import utilService from './util-service.js'


const KEY = 'emailAppKey';

function getEmailsList(filter = null) {

    return storageService.load(KEY)
        .then(emails => {
            if (!emails || !emails.length) {
                emails = randomEmailsList();
                storageService.store(KEY, emails);
            }
            // console.log('emails: ', emails);
            if (filter === null || filter.by === null) return emails;
            else  
                if(typeof(filter.by) === "boolean"){
                    return emails.filter(email =>
                        email.isRead === filter.by && filter.type === 'read' ||
                        email.isStar === filter.by && filter.type === 'star')
                } else{
                    return emails.filter(email =>
                    email.subject.toUpperCase().includes(filter.by.toUpperCase())||
                    email.from.toUpperCase().includes(filter.by.toUpperCase())||
                    email.body.toUpperCase().includes(filter.by.toUpperCase())
                    )
                }
        })
}


function randomEmailsList(){
    var list = [{
        id: utilService.makeId(8),
        from: utilService.makeId(3),
        subject: utilService.makeId(5),
        body: utilService.makeId(20),
        isRead: true,
        isStar: true,
        sentAt: Date.now()
    }]
    for(let i = 0; i < 10; i++){
        list.push({
            id: utilService.makeId(8),
            from: utilService.makeId(3),
            subject: utilService.makeId(5),
            body: utilService.makeId(20),
            isRead: false,
            isStar: false,
            sentAt: Date.now()
        } )
    }
    return list
}

function getEmailByID(emailId){
    return storageService.load(KEY)
        .then(emails => {
            return emails.find(email => email.id === emailId);
        })
}


function deleteEmail(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            var emailIdx = emails.findIndex(email => email.id === emailId);
            emails.splice(emailIdx, 1);
            return storageService.store(KEY, emails);
        })
}

function nextEmail(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            var emailIdx = emails.findIndex(email => email.id === emailId);
            var email = (emails[emailIdx+1])? emails[emailIdx+1] : emails[0]
            return email
        })
  }
  function prevEmail(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            var emailIdx = emails.findIndex(email => email.id === emailId);
            var email = (emails[emailIdx-1])? emails[emailIdx-1] : emails[emails.length-1]
            return email
        })
  }
function readMail(emailId){
    return storageService.load(KEY)
        .then(emails => {
            var currEmail = emails.find(email => email.id === emailId);
            currEmail.isRead = true
            return storageService.store(KEY, emails);
        })
}

function starEmail(emailId){
    return storageService.load(KEY)
        .then(emails => {
            var currEmail = emails.find(email => email.id === emailId);
            currEmail.isStar = !currEmail.isStar
            return storageService.store(KEY, emails);
        })
}
function sendEmail(newEmail){
    return storageService.load(KEY)
        .then(emails => {
            newEmail.id = utilService.makeId(8);
            newEmail.sentAt = Date.now();
            newEmail.isRead = false;
            newEmail.isStar = false,
            emails.unshift(newEmail)
            return storageService.store(KEY, emails);
        })
}
function changeEmail(emailId, newEmail){
    return storageService.load(KEY)
    .then(emails => {
        let email = emails.find(email => email.id === emailId);
        email.from = newEmail.from
        email.subject = newEmail.subject
        email.body = newEmail.body
        return storageService.store(KEY, emails);
    }) 
}

export default {
    getEmailsList,
    getEmailByID,
    deleteEmail,
    sendEmail,
    readMail,
    starEmail,
    nextEmail,
    prevEmail,
    changeEmail
}

