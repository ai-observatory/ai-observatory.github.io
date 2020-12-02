<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/database">Database</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="/aiobservatory">AI Observatory</b-nav-item>
          <b-nav-item href="/context">Context</b-nav-item>
          <b-nav-item href="/admsharms">ADMS Harms</b-nav-item>
          <b-nav-item href="/takeaction">Take Action</b-nav-item>
          <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        </b-navbar-nav>
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

<script>

</script>

<style lang="scss" scoped>
.navbar-expand-lg {
  background-color: black;
}
.navbar-collapse {
  background-color: white;
}
</style>
