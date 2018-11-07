

export default {
    template: `
    <section>
        <h2>Send email</h2>
        <form class="email-send-form" @submit.prevent="sendEmail">
            from: <input type="text" v-model="email.from">
            subject: <input type="text" v-model="email.subject">
            <textarea v-model="email.body" cols="30" rows="10"></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
    `,
    data() {
        return {
            email: {
                from: '',
                subject: '',
                body: '',
            }
        }
    },
    methods:{
        sendEmail(){
            console.log(this.email)
            this.$emit('sendEmail',this.email)
            this.$router.push('/email')
        }
    },
    created() {
        
    },
    computed:{

    }
}
