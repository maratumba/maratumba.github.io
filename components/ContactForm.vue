<template>
  <div>
    <form action="https://formspree.io/xknqavyb" method="POST">
      <div class="field">
        <label class="label">Name</label>
        <div class="control has-icons-left">
          <input
            class="input"
            :class="{'is-danger': form.name.error && form.name.isDirty, 'is-success': form.name.isValid}"
            type="text"
            name="name"
            v-model="form.name.value"
            @input="handleInput(form.name)"
            @blur="handleBlur(form.name)"
            placeholder="e.g Alex Smith"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <p v-show="form.name.error && form.name.isDirty" class="help is-danger">{{form.name.error}}</p>  
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left">
          <input
            name="replyto"
            class="input"
            :class="{'is-danger': form.replyto.error && form.replyto.isDirty, 'is-success': form.replyto.isValid}"
            type="email"
            v-model="form.replyto.value"
            @input="handleInput(form.replyto)"
            @blur="handleBlur(form.replyto)"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <p v-show="form.replyto.error && form.replyto.isDirty" class="help is-danger">{{form.replyto.error}}</p>  
        </div>
      </div>
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea
            name="message"
            class="textarea"
            :class="{'is-danger': form.message.error && form.message.isDirty, 'is-success': form.message.isValid}"
            v-model="form.message.value"
            @input="handleInput(form.message)"
            @blur="handleBlur(form.message)"
            placeholder="Your message"
          ></textarea>
          <p v-show="form.message.error && form.message.isDirty" class="help is-danger">{{form.message.error}}</p>  
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <button
            class="button is-primary is-fullwidth"
            type="submit"
            @click.prevent.stop="submit"
            :disabled="!formValid"
            :class="{'is-loading': loading}"
          >Send</button>
        </div>
      </div>
    </form>
      <transition name="fade">
      <div class="section fixed-bottom" v-if="showMessage" key="key">
        <div class="container">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <div class="notification" :class="{'is-danger': status==='error', 'is-success': status==='success'}">
                <button class="delete" @click="showMessage=false" ></button>
                {{ message }}
              </div>
            </div>
          </div>
        </div>
      </div>
      </transition>
  </div>
</template>

<script>
var initField = {
  value: null,
  error: '',
  isDirty: false,
  isValid: false,
}

var initForm = {
      name: {...initField},
      replyto: {...initField},
      message: {...initField}
    }
export default {
  data: () => ({
    form: initForm,
    showMessage: false,
    formSubmitUrl: "https://formspree.io/xknqavyb",
    formSubmitMethod: "POST",
    message: '',
    successMessage: 'Message sent!',
    errorMessage: 'Error:   ',
    messageTimeout: 4000,
    formValid: false,
    formDirty: false,
    status: '',
    loading: false,
  }),
  computed: {
    formData(){
      return Object.entries(this.form).reduce((acc, entry) => {
        acc[entry[0]] = this.form[entry[0]].value;
        return acc
      }, {});
    },
    
  },
  methods: {
    resetForm(){
      this.form = {
        name: {...initField},
        replyto: {...initField},
        message: {...initField}
      }
    },
    handleBlur(field){
      field.isDirty = true;
      this.validateForm()
    },
    handleInput(field){
      this.validateForm()
      
    },
    validateForm(){
      var isValid = true;
      if(!this.form.name.value){
        this.form.name.error = 'Sorry, need a name';
        isValid = false
      }
      else {
        this.form.name.error = ''
        if(this.form.name.isDirty) this.form.name.isValid = true;
      }
      if(!this.form.replyto.value){
        this.form.replyto.error = "Need an email";
        // this.form.replyto.isDirty = true
        isValid = false
      }
      else if(!this.validateEmail(this.form.replyto.value)){
        this.form.replyto.error = "Need a valid email";
        // this.form.replyto.isDirty = true
        isValid = false
      }
      else {
        if(this.form.replyto.isDirty) this.form.replyto.isValid = true;
        this.form.replyto.error = '';
      }
      if(!this.form.message.value){
        this.form.message.error = "Don't you wanna say something?";
        // this.form.message.isDirty = true
        isValid = false
      }
      else {
        if(this.form.message.isDirty) this.form.message.isValid = true;
        this.form.message.error = '';
      }
      this.formValid = isValid;
      return this.formValid;
    },
    showSuccess(resp, respType) {
      this.status = 'success'
      this.message = this.successMessage;
      this.showMessage = true;
      setTimeout(() => this.showMessage = false, this.messageTimeout)
      console.log("show success");
    },
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    showError(status, resp, respType) {
      this.status = 'error'
      this.message = `${this.errorMessage} ${JSON.parse(resp).error}`;
      this.showMessage = true;
      setTimeout(() => this.showMessage = false, this.messageTimeout)
      console.log("show error");
      console.log(status, resp, respType)
    },
    submit(ev) {
      this.formDirty = true;
      if(!this.validateForm()) return;
      // avoiding axios
      var xhr = new XMLHttpRequest();
      var vm = this;
      this.loading = true;
      xhr.open(this.formSubmitMethod, this.formSubmitUrl);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          vm.showSuccess(xhr.response, xhr.responseType);
          vm.loading = false
          vm.resetForm();
        } else {
          vm.showError(xhr.status, xhr.response, xhr.responseType);
          vm.loading = false
        }
      };
      xhr.send(JSON.stringify(this.formData));
    },
  },
};
</script>

<style scoped>
/* .fade {
  transition: opacity .5s;
} */

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.hidden {
  opacity: 0;
  display: none;
}

.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>