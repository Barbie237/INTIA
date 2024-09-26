<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> AnnTech</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
            <RouterLink :class="`nav-link ${$route.name === 'Homepage' ? 'active' : ''}`" to="/homepage">
                HomePage
            </RouterLink>            
        </li>
        <li class="nav-item">
          <RouterLink :class="`nav-link ${$route.name === 'Clients' ? 'active' : ''}`" to="/clients">
                Clients
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :class="`nav-link ${$route.name === 'Assurances' ? 'active' : ''}`" to="/assurances">
                Assurance
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <button  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#formModalFarmer">
      Create </button>
  </div>

<div class="modal fade " id="formModalFarmer" ref="formModalFarmer" data-bs-backdrop="static" data-bs-keyboard="false"
    tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                <template >
                    <h5 class="modal-title" id="staticBackdropLabel">Create</h5>
                </template>
                
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">

                <form @submit.prevent="save_clients" id="add_farmer" class="px-4 py-3">
                    <div class="mb-3">
                    <label for="farmer_name" class="form-label">Name</label>
                    <span title="Required" style="color: red">&nbsp;&#42;</span>
                    <input required   type="text" class="form-control" id="farmer_name">
                    </div>

                    <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                        <label for="age" class="form-label">Surname</label>
                        <span title="Required" style="color: red">&nbsp;&#42;</span>
                        <input required  type="number" class="form-control" id="age">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="etat" class="form-label">Genre</label>
                        <span title="Required" style="color: red">&nbsp;&#42;</span>
                        <select required id="etat" class="form-select">
                        <option value="" disabled>Veuillez sellectionner</option>
                        <option value="Male">Male</option>
                        <option value="Female">Femelle</option>
                        </select>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                        <label for="phone" class="form-label">Telephone</label>
                        <span title="Required" style="color: red">&nbsp;&#42;</span>
                        <input required pattern=".{9,}" title="7 Chiffres au moins" type="phone"
                            class="form-control" id="phone">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                        <label for="source" class="form-label">Source</label>
                        <span title="Required" style="color: red">&nbsp;&#42;</span>
                        
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                        <label for="n_cni" class="form-label">Numero CNI</label>
                        <input type="text" class="form-control" id="n_cni">
                        </div>
                    </div>
                    <div class="col-md-6">

                    </div>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                <div class="d-flex justify-content-end gap-3">
                    <button type="submit" class="btn btn-primary"  
                    data-bs-toggle="modal" data-bs-target="#accessModal">
                    <!-- <span v-show="isSubmittingFmr" class="spinner-border spinner-border-sm mr-1"></span> -->
                    Save
                    </button>
                    <button type="button" ref="Close" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>

</template>

<script>
// import { RouterLink, RouterView } from 'vue-router';
//  const authStore = useAuthStore();
      
export default {
  name: 'App',
  components: {
  },
  data() { 
    return {
      user: {},
      showDropdown: false,
     }
  },
  

  methods: {
    save_clients() {
  
    }
  },

  computed() {
  }
}
</script>

<style>
* {
    box-sizing: border-box;
  }
  main {
    min-height: 100vh;
    font-weight: 400;
  }
 .pink{
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./assets/photos/Amazingvue.png");
  background-size: cover;
 }
 .purple{
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./assets/photos/vue.png");
  background-size: cover;
 }
 
</style>@/router
