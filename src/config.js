var platform = "PC"; //"PC" or "MOBILE"
if(navigator.userAgent.match(/Android/i) ||
   navigator.userAgent.match(/webOS/i) ||
   navigator.userAgent.match(/iPhone/i) ||
   navigator.userAgent.match(/iPad/i) ||
   navigator.userAgent.match(/iPod/i) ||
   navigator.userAgent.match(/BlackBerry/i) ||
   navigator.userAgent.match(/Windows Phone/i) ||
   // below is iPads since iOS 13, from https://stackoverflow.com/a/62980873/509936
   (navigator.platform === "MacIntel" && typeof navigator.standalone !== "undefined"))
  platform = "MOBILE";
else
  platform = "PC";
var debug = false;

