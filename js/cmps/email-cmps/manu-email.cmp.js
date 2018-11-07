
export default {
    template: `
    <section>
        <div class="manu-email">
            <button class="btn-send-email"><span>+</span>compose</button>
            <router-link class="btn-manu-email" to="/email">inbox</router-link>

            <button class="btn-manu-email">read</button>
            <button class="btn-manu-email">not read</button>
        </div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods:{
    
    },
    created() {
    },
}
