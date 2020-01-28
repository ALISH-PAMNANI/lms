<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">LMS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       
            <b-nav-item href="/dashboard-librarian">Close</b-nav-item>

        

      
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
 <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
  
</div>
</template> 


<script>
  export default {
    data() {
      return {
         fields: [
          {
            key: 'Date',
            sortable: true
          },
          {
            key: 'Username',
            sortable: true
          },
          {
            key: 'first_name',
            sortable: true
          },
          {
            key: 'last_name',
            sortable: true
          },
          {
            key: 'Book_Id',
            sortable: true
          },
          {
            key: 'BookName',
            sortable: true
          }
          
        ],
 

        items: [
          { Date:"26/07/20", Username: 40, first_name: 'Alish', last_name: 'Pamnani',Book_Id: 452, BookName: "dd" },
          { Date:"28/07/20", Username: 41, first_name: 'Vishal', last_name: 'Verma',Book_Id: 452, BookName: "dd" },
          { Date:"29/07/20", Username: 42, first_name: 'Akash', last_name: 'Mehta',Book_Id: 452, BookName: "dddd" },
          { Date:"30/07/20", Username: 43, first_name: 'shubham', last_name: 'Sharma',Book_Id: 452, BookName: "sss" },
        ]
      }
    }
  }
</script>


 