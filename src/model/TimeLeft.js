import VueEvent from "@/model/VueEvent.js";

var TimeLeft = {
    nowTime: new Date().getTime(),
    timeLeft(endTime) {
        // var nowTime = new Date();
        if(endTime - this.nowTime < 0) return "overdue";
        var totalSeconds = parseInt((endTime - this.nowTime) / 1000);
        var hours = Math.floor(totalSeconds / (60 * 60));
        var minutes = Math.ceil(totalSeconds % (60 * 60) / 60 * (59/60));
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        return hours + ":" + minutes + " left"; 
    },
    updateNowTime() {
        var that = this;
        setInterval(function() {
            that.nowTime = new Date(); 
            VueEvent.$emit("updateTime");
        }, 1000);
    },
    progress(startTime, endTime) {
        if(endTime - this.nowTime < 0) return "100%";
        var rangeSeconds = parseInt((endTime - startTime) / 1000);
        var goneSeconds = parseInt((this.nowTime - startTime) / 1000);
        var percent = Math.ceil((goneSeconds / rangeSeconds) * 100);
        return percent + "%";
    }
}

export default TimeLeft;