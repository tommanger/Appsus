import emailList from '../cmps/email-cmps/email-list.cmp.js'
import navBarEmail from '../cmps/email-cmps/nav-bar-email.cmp.js'
import manuEmail from '../cmps/email-cmps/manu-email.cmp.js'

import emailDetails from '../pages/email-pages/email-details.cmp.js'



export default {

    template: `
    <section>
        <nav-bar-email @filterEmails="setFilter"></nav-bar-email>
        <div class="email-container">
            <manu-email></manu-email>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </section>
    `,
    data() {
        return {
            filter: null,
        }
    },
    methods:{
        setFilter(filter) {
            console.log(filter)
            this.filter = filter
        }
    },

    created() {
    },
    components: {
        emailList,
        emailDetails,
        navBarEmail,
        manuEmail
    }
}
