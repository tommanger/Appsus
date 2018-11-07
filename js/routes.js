import homePage from './pages/home-page.cmp.js';
import emailApp from './pages/Email-app.cmp.js';
import emailDetails from './pages/email-pages/email-details.cmp.js'
import emailList from './cmps/email-cmps/email-list.cmp.js'
import emailSend from './cmps/email-cmps/email-send.cmp.js'


import keepApp from './pages/keep-app.cmp.js';

var routes = [
    {path: '/', component: homePage },
    
    {path: '/email', component: emailApp, children: [
        { path: '', component: emailList },
        { path: 'sendEmail', component: emailSend },
        {path: ':emailId', component: emailDetails},
    ] },
    
    {path: '/keep', component: keepApp },
]

export default routes;
