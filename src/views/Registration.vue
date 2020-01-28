<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">LMS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">About</b-nav-item>
            <b-nav-item href="/login">Login</b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Your First Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.firstname"
          required
          placeholder="Enter First Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Last Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastname"
          required
          placeholder="Enter Last Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Email address:"
        label-for="input-3"
        
      >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

     

      <b-form @submit.stop.prevent>
    <label for="text-password">Create Password</label>
    <b-input type="password" id="text-password" onchange="form.pwd2.pattern = RegExp.escape(this.value)" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  required aria-describedby="password-help-block"></b-input>
    <b-form-text id="password-help-block">
   
      Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
    </b-form-text>
   </b-form>

   <b-form @submit.stop.prevent >
    <label for="text-password">Confirm Password</label>
    <b-input type="password" required name="pwd2" id="text-password" aria-describedby="password-help-block"></b-input>
    <b-form-text id="password-help-block">
     
    </b-form-text>
   </b-form>

      

      <b-button type="submit" variant="primary">Register</b-button>
      <b-button type="reset" variant="danger" href="/" >Cancel</b-button>
    </b-form>
   
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          firstname: '',
          lastname: '',
          password: '',
          
        },
        
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>