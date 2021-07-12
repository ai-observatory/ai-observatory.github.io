<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav pills> -->
        <b-nav small style="color:#ffffff !important">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/database">Database</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/context">Context</b-nav-item>
          <b-nav-item to="/admsharms">Harms</b-nav-item>
          <b-nav-item to="/glossary">Glossary</b-nav-item>
          <b-nav-item to="/reclaiming">Reclaiming AI Futures</b-nav-item>
          <!-- <b-nav-item to="/takeaction" disabled>Take Action</b-nav-item> -->
          <!-- <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link> -->
          <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        </b-nav>

        <!-- </b-navbar-nav> -->
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <!-- <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input> -->
            <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
          </b-nav-form>
          <!-- <b-nav-item-dropdown text="Lang" right> -->
          <!--   <b-dropdown-item href="#">EN</b-dropdown-item> -->
          <!--   <b-dropdown-item href="#">ES</b-dropdown-item> -->
          <!--   <b-dropdown-item href="#">RU</b-dropdown-item> -->
          <!--   <b-dropdown-item href="#">FA</b-dropdown-item> -->
          <!-- </b-nav-item-dropdown> -->
          <!-- <b-nav-item-dropdown right> -->
          <!--   <!-1- Using 'button-content' slot -1-> -->
          <!--   <template #button-content> -->
          <!--     <em>User</em> -->
          <!--   </template> -->
          <!--   <b-dropdown-item href="#">Profile</b-dropdown-item> -->
          <!--   <b-dropdown-item href="#">Sign Out</b-dropdown-item> -->
          <!-- </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script></script>

<style lang="scss" scoped>

</style>
