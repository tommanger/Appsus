import emailService from '../../service/email-service.js'

export default {
    template: `
    <section class="email-details-container" v-if="currEmail">
        <div class="btns-header">
            <button class="btn-delete" :class="{star: currEmail.isStar}" @click="starEmail(currEmail.id)"><i class="far fa-star"></i></i></button>
            <button class="btn-delete" @click.prevent="deleteEmail(currEmail.id)"><i class="fas fa-trash-alt"></i></button>
            <router-link class="btn-delete btn-det" :to="'/email/'+prevEmailId">Prev Email</router-link>
            <router-link class="btn-delete btn-det" :to="'/email/'+nextEmailId">Next Email</router-link>

        </div>
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
            nextEmailId: '',
            prevEmailId: '',
        }
    },
    methods:{
        readMail(emailId){
            this.$emit('readMail',emailId)
        },
        deleteEmail(emailId){
            this.$emit('deleteEmail',emailId)
        },
        starEmail(emailId){
            this.$emit('starEmail',emailId)
        },
        getEmail(){
            const emailId = this.$route.params.emailId;
            emailService.getEmailByID(emailId)
            .then(currEmail => {
                this.currEmail = currEmail
                this.readMail(this.currEmail.id)
            })
            emailService.nextEmail(emailId)
                .then(next => {
                    this.nextEmailId = next.id
                })
            emailService.prevEmail(emailId)
                .then(prev => {
                    this.prevEmailId = prev.id
                })
        }
    },
    created() {
     this.getEmail()
   },
   watch: {
    '$route.params.emailId': function (id, prevValue) {
        // console.log('Watch - ROUTE PARAM WAS CHANGED', id, 'PREV:', prevValue);
        this.getEmail()
      }
  }
}


