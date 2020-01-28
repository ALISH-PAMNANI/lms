<template>

     <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">LMS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
         <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search Books"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="/registration">Register</b-nav-item>
        <b-nav-item href="/login">Login</b-nav-item>
      </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div>
  <b-jumbotron header="Welcome to Library Management System" lead="When in doubt come to library">  
    <b-button variant="primary" href="#">More Info</b-button>
  </b-jumbotron>
</div>
  
</div>


</template>

<script>
export default {
    methods:{  goTodetail() {    this.$router.push({name:'login'})  }}
}
</script>

<style scoped>

.jumbotron h1{
    color: rgba(221, 218, 14, 0.76);
}   
div {   
    
  background-image: url('../assets/20190507_111855.jpg');
}
.bg {
  /* The image used */
  background-image: url("../assets/20190507_111855.jpg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>