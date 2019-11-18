<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-4">
          <AddItem class="mb-3"/>
        </div>
        <div class="col-md-8">
          <List />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Item from "@/components/Item.vue";
import AddItem from "@/components/AddItem.vue";
import List from "@/components/List.vue";

export default {
  name: "home",
  components: {
    Header,
    Item,
    AddItem,
    List
  }
};
</script>

<style lang="scss" scoped>

</style>
