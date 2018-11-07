

export default {
    props: ['emailList'],
    template: `
    <section>
        <ul class="email-list" v-if="emailList">
            <li v-for="email in emailList">
                    <router-link class="title-email-list" :class="{readEmail: email.isRead}" :to="'/email/'+email.id">
                        <h2 class="title-email-item">{{email.from}}</h2>
                        <h2 class="title-email-item">{{email.subject}}</h2>
                        <h2 class="title-email-item">{{email.sentAt}}</h2>
                        <button class="btn-delete" @click.prevent="starEmail(email.id)"><i class="far fa-star"></i></i></button>
                        <button class="btn-delete" @click.prevent="deleteEmail(email.id)"><i class="fas fa-trash-alt"></i></button>
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
        }
        
    },
    created() {
        
    },
    computed:{

    }
}
