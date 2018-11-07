import homePage from './pages/home-page.cmp.js';
import emailApp from './pages/Email-app.cmp.js';
import keepApp from './pages/keep-app.cmp.js';
import keepEdit from './pages/keep/keep-edit.cmp.js'

var routes = [
    {path: '/', component: homePage },
    {path: '/email', component: emailApp },
    {path: '/keep', component: keepApp },
    {path: '/keep/:noteId?', component: keepEdit },
    // {path: '/keep/:noteId', component: keepAdd },
]

export default routes;
