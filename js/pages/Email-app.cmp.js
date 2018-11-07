import emailList from "../cmps/email-cmps/email-list.cmp.js";
import navBarEmail from "../cmps/email-cmps/nav-bar-email.cmp.js";
import manuEmail from "../cmps/email-cmps/manu-email.cmp.js";
import emailService from "../service/email-service.js";

import emailDetails from "../pages/email-pages/email-details.cmp.js";

export default {
  template: `
    <section>
        <nav-bar-email @filterEmails="setFilter"></nav-bar-email>
        <div class="email-container">
            <manu-email @filterByRead="setFilter"></manu-email>
            <router-view @sendEmail="sendEmail" 
                        @readMail="readMail"
                        @deleteEmail="deleteEmail"
                        @starEmail="starEmail"
                        :emailList="emailList">
            </router-view>
        </div>
    </section>
    `,
  data() {
    return {
      filter: null,
      emailList: null
    };
  },
  methods: {
    setFilter(filter) {
      this.filter = { ...filter };

      emailService.getEmailsList(this.filter)
        .then(emailsList => (this.emailList = emailsList));
    },

    deleteEmail(emailId) {
      this.emailList = this.emailList.filter(email => {
        return email.id !== emailId;
      });
      emailService.deleteEmail(emailId);
    },

    sendEmail(email){
      emailService.sendEmail(email)
    },

    readMail(emailId){
      emailService.readMail(emailId)
    },
    starEmail(emailId){
      var email = this.emailList.find(email => email.id === emailId)
      email.isStar = true
      emailService.starEmail(emailId)
    }
  },

  created() {
    emailService.getEmailsList()
      .then(emailsList => (this.emailList = emailsList));
  },
  components: {
    emailList,
    emailDetails,
    navBarEmail,
    manuEmail
  },
  computed: {}
};
