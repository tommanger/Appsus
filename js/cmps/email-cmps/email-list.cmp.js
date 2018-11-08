

export default {
    props: ['emailList'],
    template: `
    <section class="container-list">
        <ul class="email-list" v-if="emailList">
            <li v-for="email in emailList">
                    <router-link tag="div" class="title-email-list" :class="{readEmail: email.isRead}" :to="'/email/'+email.id">
                        <h2 class="title-email-item from-list">{{email.from}}</h2>
                        <h2 class="title-email-item subject-list">{{email.subject}}</h2>
                        <h2 class="title-email-item">{{timeTostr(email.sentAt)}}</h2>
                        <div>
                            <button class="btn-delete" :class="{star: email.isStar}" @click.prevent="starEmail(email.id)"><i class="far fa-star"></i></i></button>
                            <button class="btn-delete" @click.prevent="deleteEmail(email.id)"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </router-link>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
        }
    },
    methods:{
        deleteEmail(emailId){
            this.$emit('deleteEmail',emailId)
        },
        starEmail(emailId){
            this.$emit('starEmail',emailId)
        },
        timeTostr(time){
            return moment(time).format("MM/DD/YYYY")
        }
        
    },
    created() {
        
    },
    computed:{

    }
}
