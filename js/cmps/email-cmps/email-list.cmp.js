import emailService from '../../service/email-service.js'


export default {

    template: `
    <section>
        <ul class="email-list" v-if="emailList">
            <li v-for="email in emailList">
                    <router-link class="title-email-list" :to="'/email/'+email.id">
                    <h2 class="title-email-item">{{email.from}}</h2>
                    <h2 class="title-email-item">{{email.subject}}</h2>
                    <h2 class="title-email-item">{{email.sentAt}}</h2>
                    </router-link>
                
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            emailList: null,
        }
    },
    methods:{
      
    },
    created() {
        emailService.getEmailsList()
        .then(emailsList =>
            this.emailList = emailsList)
    },
}
