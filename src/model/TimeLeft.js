import VueEvent from "@/model/VueEvent.js";

var TimeLeft = {
    updateInverval: 100,
    nowTime: new Date().getTime(),
    timeLeft(endTime) {
        // var nowTime = new Date();
        // if(endTime - this.nowTime < 0) return "overdue";
        var totalSeconds = parseInt(Math.abs(endTime - this.nowTime) / 1000);
        var hours = Math.floor(totalSeconds / (60 * 60));
        var minutes = (Math.ceil(totalSeconds % (60 * 60) / 60 * (59/60))).toString().padStart(2,"0"); //don't show '60' at very first, and do show '0' at very end
        // if(minutes < 10){
        //     minutes = "0" + minutes;
        // }
        // if(endTime - this.nowTime < 0)
        var appendText = (this.nowTime - endTime < 0)? "left": "late";
        return hours + ":" + minutes + " " + appendText; 
    },
    updateNowTime() {
        var that = this;
        setInterval(function() {
            that.nowTime = new Date(); 
            VueEvent.$emit("updateTime");
        }, that.updateInverval);
    },
    progress(startTime, endTime) {
        if(endTime - this.nowTime < 0) return "99.99%"; // So that items would'n have ugly unexpectly black corners when animated
        var rangeMiliseconds = parseInt(endTime - startTime);
        var goneMiliseconds = parseInt(this.nowTime - startTime);
        var percent = (goneMiliseconds / rangeMiliseconds) * 100;
        return percent + "%";
    }
}

export default TimeLeft;