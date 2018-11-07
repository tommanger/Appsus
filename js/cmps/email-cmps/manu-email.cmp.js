
export default {
    template: `
    <section>
        <div class="manu-email">
        <router-link class="btn-send-email" to="/email/sendEmail"><span>+</span>compose</router-link>

            <router-link to="/email">
            <button @click="readClick({by: null})" class="btn-manu-email">inbox</button>
            <button @click="readClick({by: true, type: 'read'})" class="btn-manu-email">read</button>
            <button @click="readClick({by: false, type: 'read'})" class="btn-manu-email">not read</button>
            <button @click="readClick({by: true, type: 'star'})" class="btn-manu-email">starred</button>

            </router-link>
        </div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods:{
        readClick(val){
            this.$emit('filterByRead', val)
        }
    },
    created() {
    },
}
