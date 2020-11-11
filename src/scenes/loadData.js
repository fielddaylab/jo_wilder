var LOAD_DATA_TYPE = Math.floor(Math.random() * 4);

function loadScriptSync(src) {
    var s = document.createElement('script');
    s.src = src;
    s.type = "text/javascript";
    s.async = false;
    document.getElementsByTagName('head')[0].appendChild(s);
    console.log('Loaded script data from: '+src);
}

let referrer = new URL(document.referrer);
let current_url = new URL(window.location.href);
let script_type = current_url.searchParams.get("script_type");
if(script_type == "null") script_type = null;

if(
  referrer.host === "www3.pbswisconsineducation.org" ||
  referrer.host ===  "www.pbswisconsineducation.org" ||
  referrer.host ===      "pbswisconsineducation.org"
  )
{
    QUIZ_GLOBAL_SHOW = false;
    LOAD_DATA_TYPE = LOG_DATA_NORMAL;
    console.log("Loading from pbswisconsineducation.org. Original script. No surveys.");
}
else if (script_type != null) {
    console.log(script_type);
    console.log("Loading custom script "+script_type);
    if (script_type === "dry") {
        LOAD_DATA_TYPE = LOG_DATA_DRY;
    }
    else if (script_type === "nohumor") {
        LOAD_DATA_TYPE = LOG_DATA_NOHUMOR;
    }
    else if (script_type === "nosnark") {
        LOAD_DATA_TYPE = LOG_DATA_NOSNARK;
    }
    else if (script_type === "original") {
        LOAD_DATA_TYPE = LOG_DATA_NORMAL;
    }
    else {
        console.log("Invalid script_type "+script_type);
    }
}
if (LOAD_DATA_TYPE == LOG_DATA_DRY) {
    loadScriptSync('src/scenes/data_dry.js');
    console.log("script_type: dry");
}
else if (LOAD_DATA_TYPE == LOG_DATA_NOHUMOR) {
    loadScriptSync('src/scenes/data_nohumor.js');
    console.log("script_type: nohum");
}
else if (LOAD_DATA_TYPE == LOG_DATA_NOSNARK) {
    loadScriptSync('src/scenes/data_nosnark.js');
    console.log("script_type: nosnar");
}
else if (LOAD_DATA_TYPE == LOG_DATA_NORMAL) {
    loadScriptSync('src/scenes/data.js');
    console.log("script_type: orig");
}

