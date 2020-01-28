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
            <b-nav-item href="/registration">Register</b-nav-item>

        

      
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Username:"
        label-for="input-1"
        
      >
      <b-form-input
          id="input-1"
          v-model="form.username"
          type="username"
          required
          placeholder="Enter Username"
        ></b-form-input>
       </b-form-group>

       
  <b-form @submit.stop.prevent>
    <label for="text-password">Password</label>
    <b-input type="password" required id="text-password" aria-describedby="password-help-block"></b-input>
    
    <b-form-text id="password-help-block"  placeholder="Enter Password">
      Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, special characters, or emoji.
    </b-form-text>
   </b-form>


     

      <b-form-group id="input-group-4" description="We'll never share your credentials with anyone else.">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Terms and Conditions</b-form-checkbox>
          
        </b-form-checkbox-group>
        
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Forgot Password</b-button>
    </b-form>
    
  </div>
</div>
</template> 

<script>
  export default {
    data() {
      return {
        form: {
          username: '',
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