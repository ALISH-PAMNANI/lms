<template>
    <div>
     
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">LMS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#"></b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search For Books"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

       <b-navbar-nav>
        <!-- <b-nav-item href="#">Issued Books</b-nav-item>
         <b-nav-item href="#">Return Book</b-nav-item>  -->
        
      </b-navbar-nav> 
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        

<b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em><b-icon icon="question-fill"></b-icon>Notifications</em>
          </template>
          <b-dropdown-item href="#"><b-icon icon="gear-fill"></b-icon>Profile</b-dropdown-item>
          
        </b-nav-item-dropdown>
        

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#"><b-icon icon="gear-fill"></b-icon>Profile</b-dropdown-item>
          <b-dropdown-item href="#"><b-icon icon="power"></b-icon>Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


  
  <div align="center">
    <b-icon icon="cone"  v-on:click="warn('Form cannot be submitted yet.', $event)" class="border border-info rounded" variant="info" style="width: 200px; height: 200px;"></b-icon>
  
    <b-icon icon="skip-forward-fill"  v-on:click="warn('Form cannot be submitted yet.', $event)" class="border border-info rounded" variant="info" style="width: 200px; height: 200px;"></b-icon>
  
    <b-icon icon="skip-end-fill"  v-on:click="warn('Form cannot be submitted yet.', $event)" class="border border-info rounded" variant="info" style="width: 200px; height: 200px;"></b-icon>
  </div>

<div>
   
    <b-button @click="show=true" variant="primary">Show Modal</b-button>

    <b-modal
      v-model="show"
      title="Add Members"
      :header-bg-variant="headerBgVariant"
      
      :body-bg-variant="bodyBgVariant"
      
      :footer-bg-variant="footerBgVariant"
      
    >
      <b-container fluid>
      

        <b-row class="mb-1">
          <b-col cols="3">Username</b-col>
          <b-col>
            <b-form-select  
              v-model="headerBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3">BookID</b-col>
          <b-col>
            <b-form-select
              v-model="bodyBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
         
        </b-row>

        <b-row>
          <b-col cols="3">Footer</b-col>
          <b-col>
            <b-form-select
              v-model="footerBgVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="footerTextVariant"
              :options="variants"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-container>

      <template v-slot:modal-footer>
        <div class="w-100">
          <p class="float-left">Modal Footer Content</p>
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="show=false"
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  

</div>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        headerBgVariant: 'dark',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'dark',
        footerBgVariant: 'warning',
        footerTextVariant: 'dark'
      }
    },

    methods: {
  warn: function (message, event) {
    // now we have access to the native event
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
  }
</script>

<style>
.icon {
  position: relative;
  /* Adjust these values accordingly */
  top: 5px;
  left: 5px;
  float:left;
}
</style>