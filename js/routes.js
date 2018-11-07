import homePage from './pages/home-page.cmp.js';
import emailApp from './pages/Email-app.cmp.js';
import emailDetails from './pages/email-pages/email-details.cmp.js'
import emailList from './cmps/email-cmps/email-list.cmp.js'
import emailSend from './cmps/email-cmps/email-send.cmp.js'


import keepApp from './pages/keep-app.cmp.js';
import keepList from './cmps/keep/keep-list.cmp.js'
import editImg from './cmps/keep/img-edit.cmp.js';
import editTxt from './cmps/keep/txt-edit.cmp.js';

var routes = [
    {path: '/', component: homePage },
    
    {path: '/email', component: emailApp, children: [
        { path: '', component: emailList },
        { path: 'sendEmail', component: emailSend },
        {path: ':emailId', component: emailDetails},
    ] },
    
    {path: '/keep', component: keepApp, children: [
        { path: '', component: keepList },
        {path: 'img/:noteId?', component: editImg},
        {path: 'img/:noteId?', component: editImg},
        {path: 'txt/:noteId?', component: editTxt},
        {path: 'txt/:noteId?', component: editTxt},
    ] },
]

export default routes;
