<template>
  <li type="none">
    <!-- item head -->
    <div v-if="!itemInfo.is_item">
      <!-- <hr class="d-sm-none" /> -->
      <h5 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">{{itemInfo.content}}</span>
        <span class="badge badge-secondary badge-pill">{{itemInfo.start_time}}</span>
      </h5>
    </div>
    <!-- item -->
    <div class="mb-3" style="height: 50px;" v-if="itemInfo.is_item">
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped"
          :type="itemInfo.type"
          :style="{'width':percent}"
        ></div>
      </div>
      <div class="progress progress-cover" :ichecked="itemInfo.checked">
        <div class="leftContent">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              :id="itemInfo.id"
              v-model="itemInfo.checked"
              @change="checkboxChange"
            />
            <label class="custom-control-label" :type="itemInfo.type" :for="itemInfo.id">
              <div class="contentText" :ichecked="itemInfo.checked">{{itemInfo.content}}</div>
            </label>
          </div>
        </div>
        <div class="rightContent">
          <div class="countdown">{{timeLeft}}</div>
          <button type="button" class="close" @click="deleteItem">&times;</button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import VueEvent from "@/model/VueEvent.js";
import TimeLeft from "@/model/TimeLeft.js";

export default {
  name: "Item",
  data() {
    return {
      timeLeft: "",
      percent: ""
    };
  },
  computed: {},
  props: {
    itemInfo: Object
  },
  methods: {
    deleteItem: function() {
      VueEvent.$emit("deleteItem", this.itemInfo.id);
      VueEvent.$off("updateTime", this.updateTimeAndProgress);
    },
    updateTimeAndProgress: function() {
      // if (!this.itemInfo.checked) {
        this.timeLeft = TimeLeft.timeLeft(this.itemInfo.end_time);
        this.percent = TimeLeft.progress(this.itemInfo.start_time, this.itemInfo.end_time);
      // }
      // if(this.percent == "100%" && this.timeLeft == "overdue") { //stop update when items overdue
      //   VueEvent.$off("updateTime", this.updateTimeAndProgress);
      // }
    },
    checkboxChange: function() {
      VueEvent.$off("updateTime", this.updateTimeAndProgress);
      // if (!this.itemInfo.checked && (this.percent != "100%" || this.timeLeft != "overdue")) {
      //   VueEvent.$on("updateTime", this.updateTimeAndProgress);
      // }
      if (!this.itemInfo.checked) {
        VueEvent.$on("updateTime", this.updateTimeAndProgress);
      }
    }
  },
  mounted() {
    this.updateTimeAndProgress();
    VueEvent.$on("updateTime", this.updateTimeAndProgress);
  }
};
</script>

<style lang="scss" scoped>
.progress {
  display: flex;
  position: relative;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
}

.progress-bar {
  z-index: 97;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-self: stretch;
}

.progress-cover {
  position: relative;
  top: -50px;
  background-color: rgba(255, 255, 255, 0);
  z-index: 98;
}

.progress-cover[ichecked="true"] {
  background-color: rgba(255, 255, 255, 0.5);
}

.contentText {
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.custom-control-label {
  width: 100%;
}

.leftContent {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 20px;
  padding-right: 20px;
}

.rightContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  min-width: 100px;
  padding-right: 20px;
  transition: all 0.5s ease;
}

.rightContent:hover {
  transform: translate(0px, -50px);
}

.countdown {
  width: 100%;
  vertical-align: middle;
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  line-height: 50px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.close {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 50px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  opacity: 1;
  align-self: flex-end;
  margin-right: 10px;
}

.close:hover {
  color: #eee;
  text-decoration: none;
}

.contentText[ichecked="true"] {
  text-decoration: line-through;
}

/* Normal */
.progress-bar[type="0"] {
  background-color: #28a745;
}
.custom-control-input:checked ~ .custom-control-label[type="0"]::before {
  color: #fff;
  border-color: #28a745;
  background-color: #28a745;
}
.custom-control-input:focus ~ .custom-control-label[type="0"]::before {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}
.custom-control-input:focus:not(:checked)
  ~ .custom-control-label[type="0"]::before {
  border-color: #66b378;
}
.custom-control-input:not(:disabled):active
  ~ .custom-control-label[type="0"]::before {
  color: #fff;
  background-color: #ace7ba;
  border-color: #ace7ba;
}

/* Major */
.progress-bar[type="1"] {
  background-color: #ffc107;
}
.custom-control-input:checked ~ .custom-control-label[type="1"]::before {
  color: #fff;
  border-color: #ffc107;
  background-color: #ffc107;
}
.custom-control-input:focus ~ .custom-control-label[type="1"]::before {
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
}
.custom-control-input:focus:not(:checked)
  ~ .custom-control-label[type="1"]::before {
  border-color: #fdd765;
}
.custom-control-input:not(:disabled):active
  ~ .custom-control-label[type="1"]::before {
  color: #fff;
  background-color: #fae6ab;
  border-color: #fae6ab;
}

/* deadly */
.progress-bar[type="2"] {
  background-color: #dc3545;
}
.custom-control-input:checked ~ .custom-control-label[type="2"]::before {
  color: #fff;
  border-color: #dc3545;
  background-color: #dc3545;
}
.custom-control-input:focus ~ .custom-control-label[type="2"]::before {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.custom-control-input:focus:not(:checked)
  ~ .custom-control-label[type="2"]::before {
  border-color: #e96472;
}
.custom-control-input:not(:disabled):active
  ~ .custom-control-label[type="2"]::before {
  color: #fff;
  background-color: #f7a9b1;
  border-color: #f7a9b1;
}
</style>