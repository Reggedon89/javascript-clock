$(document).ready(() => {
  function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if (hours === 0) {
      hours = 12;
    }
    if (hours > 12) {
      hours = hours - 12;
      session = "PM";
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let time = hours + ":" + minutes + ":" + seconds + " " + session;

    $("#clock-wrapper").html(time);
  }
  setInterval(showTime, 1000);
  showTime();

  function showHex() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let combine =
      "#" +
      Number(hours).toString(16) +
      Number(minutes).toString(16) +
      Number(seconds).toString(16);
    $("#hex-wrapper").html(combine);
    $("body").css("background", combine);
  }
  setInterval(showHex, 1);
  showHex();
});
