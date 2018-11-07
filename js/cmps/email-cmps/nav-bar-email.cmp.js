
export default {
    template: `
    <section>
        <div class="nav-bar-email">
            <h2>EmailSUS</h2>
            <input class="filter-emails" type="text" v-model="filter.by" @input="emitFilter">
        </div>
    </section>
    `,
    data() {
        return {
            filter: {by: ''}

        }
    },
    methods:{
        emitFilter(){
            this.$emit('filterEmails', this.filter)
        }
    },
    created() {
    },
}
