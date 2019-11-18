<template>
  <div>
    <transition-group tag="ul" name="list-complete" class="unorderList">
      <Item
        v-for="item in shownList"
        v-bind:key="item.id"
        :itemInfo="item"
        class="list-complete-item"
        :itype="item.type"
      />
    </transition-group>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import VueEvent from "@/model/VueEvent.js";
import TimeLeft from "@/model/TimeLeft.js";

export default {
  name: "List",
  data() {
    return {
      listType: 0,    //0:allList, 1:timeLeftList, 2:EmergencyList
      itemlist: [
        //mock data
        {
          is_item: false,
          content: "Ongoing",
          type: -1,   //-1:itemHead, 0:normal, 1:major, 2:deadly
          start_time: 0,    //badge count
          end_time: 0,
          checked: false, //unused
          overdue: false, //unused
          id: 1073645789900
        },
        {
          is_item: false,
          content: "Finished",
          type: -1,
          start_time: 0,
          end_time: 0,
          checked: false,
          overdue: false,
          id: 1173645789900
        },
        {
          is_item: true,
          content: "mock data normal",
          type: 0,
          start_time: new Date().getTime(),
          end_time: 0,
          checked: false, //unused
          overdue: false, //unused
          id: 1573645789900
        },
        {
          is_item: true,
          content: "mock data major",
          type: 1,
          start_time: new Date().getTime(),
          end_time: 0,
          checked: false,
          overdue: false,
          id: 1573645789901
        },
        {
          is_item: true,
          content: "mock data deadly",
          type: 2,
          start_time: new Date().getTime(),
          end_time: 0,
          checked: false,
          overdue: false,
          id: 1573645789902
        }
        //
      ]
    };
  },
  computed: {
    ongoingList() {   //this function would be called when item added, deleted or checked
      var ongoingHead = _.filter(this.itemlist, {
        is_item: false,
        content: "Ongoing"
      });
      var ongoingItem = _.filter(this.itemlist, {
        is_item: true,
        checked: false
      });
      ongoingHead[0].start_time = ongoingItem.length;   //badge count
      VueEvent.$cookies.set("itemlist", JSON.stringify(this.itemlist), "30d");    //save itemlist to cookies
      return _.concat(ongoingHead, ongoingItem);
    },
    finishedList() {
      var finishedHead = _.filter(this.itemlist, {
        is_item: false,
        content: "Finished"
      });
      var finishedItem = _.filter(this.itemlist, {
        is_item: true,
        checked: true
      });
      finishedHead[0].start_time = finishedItem.length;
      return _.concat(finishedHead, finishedItem);
    },
    allList() {
      return _.concat(this.ongoingList, this.finishedList);
    },
    timeLeftList() { //less time-left item first
      var ongoing = _.concat(
        _.head(this.ongoingList),
        _.orderBy(
          _.tail(this.ongoingList),
          ["end_time", "type"],
          ["asc", "desc"]
        )
      );
      var finished = _.concat(
        _.head(this.finishedList),
        _.orderBy(
          _.tail(this.finishedList),
          ["end_time", "type"],
          ["asc", "desc"]
        )
      );
      return _.concat(ongoing, finished);
    },
    emergencyList() { //deadly, major, normal item sequence
      var ongoing = _.concat(
        _.head(this.ongoingList),
        _.orderBy(
          _.tail(this.ongoingList),
          ["type", "end_time"],
          ["desc", "asc"]
        )
      );
      var finished = _.concat(
        _.head(this.finishedList),
        _.orderBy(
          _.tail(this.finishedList),
          ["type", "end_time"],
          ["desc", "asc"]
        )
      );
      return _.concat(ongoing, finished);
    },
    shownList() { //banding list
      if (this.listType == 0) return this.allList;
      else if (this.listType == 1) return this.timeLeftList;
      else return this.emergencyList;
    }
  },
  created() {
    if (VueEvent.$cookies.isKey("itemlist")) {
      this.itemlist = JSON.parse(VueEvent.$cookies.get("itemlist"));  //load itemlist from cookies
    }
  },
  mounted() {
    TimeLeft.updateNowTime(); //start a commom update interval
    var that = this;
    VueEvent.$on("addItem", function(data) { //listen to AddItem.vue component
      that.itemlist.push(data);
    });

    VueEvent.$on("deleteItem", function(data) { //listen to Item.vue component 
      that.itemlist = that.itemlist.filter(function(item) {
        return item.id !== data;
      });
    });

    VueEvent.$on("changeList", function(data) { //listen to Header.vue component
      that.listType = data;
    });
  },
  components: {
    Item
  }
};
</script>


<style lang="scss" scoped>
.list-complete-item {
  transition: all 0.3s ease-in-out;
}
.list-complete-enter,
.list-complete-leave-to { //add item animate
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-move[itype="-1"] { //items head animate
  opacity: 0.2;
}
.list-complete-leave-active { //delete item animate
  position: absolute; //make the item leave the place in DOM at the moment when delete animate started
  width: 100%;
}
.unorderList {
  position: relative; //in case the deleting item overflows the 'col-md-8' container
}
</style>
