<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand" href="#"><img id="logo" src="@/assets/logo.png"/>ToDone</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar" style="text-align:left;">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#" value="0" @click.prevent="changeList($event)">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" value="1" @click.prevent="changeList($event)">Time Left</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" value="2" @click.prevent="changeList($event)">Emergency</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import VueEvent from "@/model/VueEvent.js";
import $ from "jquery";

export default {
  name: 'Header',
  methods: {
    changeList: function(event) {
      $(".nav-link").removeClass("active");
      $(event.target).addClass("active");
      VueEvent.$emit("changeList", event.target.getAttribute("value"));
      setTimeout(function() {      
        $("#collapsibleNavbar").collapse("hide");
      }, 150);
    }
  }
}
</script>

<style lang="scss" scoped>
#logo {
  height: 1.4rem;
  margin: 0 .5rem;
  vertical-align: middle;
  transform: translate(0px, -1.5px);
 }
</style>