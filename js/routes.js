import homePage from './pages/home-page.cmp.js';
import emailApp from './pages/Email-app.cmp.js';
import keepApp from './pages/keep-app.cmp.js';

var routes = [
    {path: '/', component: homePage },
    {path: '/email', component: emailApp },
    {path: '/keep', component: keepApp },
]

export default routes;
