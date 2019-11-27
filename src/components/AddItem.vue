<template>
  <div>
    <h5 class="d-flex justify-content-between align-items-center mb-3" id="addHead" data-toggle="collapse" href="#addForm">
      <span class="text-muted">Add Todos</span>
      <span class="badge badge-secondary badge-pill fa fa-chevron-left"></span>
      <span class="fas"></span>
    </h5>
    <form id="addForm">
      <div class="input-group mb-2">
        <select class="custom-select" v-model="item.type">
          <option class="custom-input" value="0">Normal</option>
          <option class="custom-input" value="1">Major</option>
          <option class="custom-input" value="2">Deadly</option>
        </select>
        <input
          type="text"
          class="form-control"
          placeholder="What's need to be done..."
          v-model="item.content"
          required
          autocomplete="off"
        />
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">From</span>
        </div>
        <date-picker
          id="start_time"
          class="form-control input-sm"
          :value="new Date()"
          :config="options_start"
          @dp-hide="startTimeChange"
          required
          autocomplete="off"
          readonly="readonly" 
        />  <!-- readonly attribute prevents the keyboard shown up on phones -->
      </div>

      <div
        class="input-group"
        style="position:relative; transform:translate(0px, -1px); z-index:99;"
      >
        <div class="input-group-prepend">
          <span class="input-group-text">To</span>
        </div>
        <date-picker
          id="end_time"
          class="form-control input-sm"
          value
          :config="options_end"
          @dp-hide="endTimeChange"
          required
          autocomplete="off"
          readonly="readonly"
        />
      </div>

      <div class="d-flex mt-2 justify-content-end">
        <button class="btn btn-outline-light text-dark" @click="reset">reset</button>
        <button class="btn btn-primary" @click="addItem">add</button>
      </div>
    </form>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import datePicker from "vue-bootstrap-datetimepicker";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";
import $ from "jquery";
import VueEvent from "@/model/VueEvent.js";
// import TimeLeft from "@/model/TimeLeft.js";

export default {
  name: "AddItem",

  data() {
    return {
      // nowTime: "",
      item: {
        is_item: true,
        content: "",
        type: 0,
        start_time: new Date().getTime(),
        end_time: 0,
        checked: false,
        overdue: false,
        id: 0
      },
      options_start: {
        format: "YYYY-MM-DD  HH:mm  dddd",
        useCurrent: false,
        showTodayButton: true,
        showClose: true,
        locale: "en",
        maxDate: false,
        ignoreReadonly: true,
        tooltips: {
          selectTime: "",
          today: "Now"
        },
        widgetPositioning: {
          horizontal: "right",
          vertical: "auto"
        }
      },
      options_end: {
        format: "YYYY-MM-DD  HH:mm  dddd",
        useCurrent: false,
        showTodayButton: true,
        showClose: true,
        locale: "en",
        minDate: new Date(),
        ignoreReadonly: true,
        tooltips: {
          selectTime: "",
          today: "Now"
        },
        widgetPositioning: {
          horizontal: "right",
          vertical: "auto"
        }
      }
    };
  },
  mounted() {
  //   VueEvent.$on("updateTime", ()=> {
  //     this.options_end.minDate = new Date();
  //   });
    
    this.addItemCollapse();
    window.onresize = () => this.addItemCollapse();
      
    
    $("#addForm").on("show.bs.collapse", () => {
      $(".fas").addClass("fa-rotate-180");
      // $(".fas").addClass("fa-flip-vertical");
    });
    $("#addForm").on("hide.bs.collapse", () => {
      $(".fas").removeClass("fa-rotate-180");
      // $(".fas").removeClass("fa-flip-vertical");
    });
  },
  methods: {
    addItemCollapse: function() {
      if(document.body.clientWidth < 768){
        $("#addForm").addClass("collapse");
        $("#addHead").attr("data-toggle", "collapse");
        $("#addHead").attr("href", "#addForm");
        $(".fas").addClass("fa-chevron-down");
      } else {
        $("#addForm").removeClass("collapse");   
        $("#addHead").removeAttr("data-toggle");
        $("#addHead").removeAttr("href");
        $(".fas").removeClass("fa-chevron-down");  
      }
    },

    startTimeChange: function() {
      this.item.start_time = $("#start_time")
        .data("DateTimePicker")
        .date()
        ._d.getTime();
      if (this.item.start_time > new Date().getTime()) {
        this.options_end.minDate = new Date(this.item.start_time);
      }
    },

    endTimeChange: function() {
      if (
        $("#end_time")
          .data("DateTimePicker")
          .date() != null
      ) {
        this.item.end_time = $("#end_time")
          .data("DateTimePicker")
          .date()
          ._d.getTime();
        this.options_start.maxDate = new Date(this.item.end_time);
      }
    },

    addItem: function() {
      if (
        this.item.content !== "" &&
        this.item.content.trim() &&
        this.item.end_time !== ""
      ) {
        var uid = new Date().getTime();
        VueEvent.$emit("addItem", {
          is_item: this.item.is_item,
          content: this.item.content,
          type: this.item.type,
          start_time: this.item.start_time,
          end_time: this.item.end_time,
          checked: this.item.checked,
          overdue: this.item.overdue,
          id: uid
        });
        setTimeout(() => {
          this.item.content = "";
          this.item.end_time = 0;
          $("#end_time").val("");
        }, 0);
      }
    },

    reset: function() {
      setTimeout(() => {
        this.item.content = "";
        this.item.end_time = 0;
        $("#end_time").val("");
      }, 0);
    }
  },
  components: {
    datePicker
  },

  created: function() {
    $.extend(true, $.fn.datetimepicker.defaults, {
      icons: {
        time: "far fa-clock",
        date: "far fa-calendar",
        up: "fas fa-arrow-up",
        down: "fas fa-arrow-down",
        previous: "fas fa-chevron-left",
        next: "fas fa-chevron-right",
        today: "fas fa-calendar-check",
        clear: "far fa-trash-alt",
        close: "far fa-times-circle"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.input-group-text {
  display: inline-block;
  width: 95px;
  align-content: center;
  text-align: center;
}

.custom-select {
  max-width: 95px;
}

[readonly="readonly"] {
  background-color: white !important;
}

.fas {
  color: gray;
  margin-right: 4px;
  transition: all ease .5s;
} 

// @media only screen and (max-width: 768px) {
//   .collapse {
//     display: none;
//   }
// }
</style>