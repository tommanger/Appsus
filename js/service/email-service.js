import storageService from './store-service.js'

import utilService from './util-service.js'


const KEY = 'emailAppKey';

function getEmailsList(filter = null) {
    return storageService.load(KEY)
        .then(emails => {
            if (!emails || !emails.length) {
                emails = randomEmailsList();
                storageService.store(KEY, emails);
            }
            console.log('emails: ', emails);
            if (filter === null) return emails;
            else return emails.filter(car => 
                    emails.vendor.toUpperCase().includes(filter.byVendor.toUpperCase()))
        })
}


function randomEmailsList(){
    var list = []
    for(let i = 0; i < 10; i++){
        list.push({
            id: utilService.makeId(8),
            from: utilService.makeId(3),
            subject: utilService.makeId(5),
            body: utilService.makeId(20),
            isRead: false,
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

export default {
    getEmailsList,
    getEmailByID
}

