import emailService from '../../service/email-service.js'

export default {
    template: `
    <section v-if="currEmail">
       <div class="title-header-email">
           <h2>subject: {{currEmail.subject}}</h2>
           <h3>sentAt: {{currEmail.sentAt}}</h3>
           <h2>from: {{currEmail.from}}</h2>
           <p>{{currEmail.body}}</p>

       </div>
    </section>
    `,
    data() {
        return {
            currEmail: null,
        }
    },
    methods:{
    
    },
    created() {
        const emailId = this.$route.params.emailId;
        emailService.getEmailByID(emailId)
        .then(currEmail => {
            this.currEmail = currEmail
        })
   },
}
