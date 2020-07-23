var LOAD_DATA_TYPE = Math.floor(Math.random() * 4);

function loadScriptSync(src) {
    var s = document.createElement('script');
    s.src = src;
    s.type = "text/javascript";
    s.async = false;
    document.getElementsByTagName('head')[0].appendChild(s);
    console.log('Loaded script data from: '+src)
}

if (LOAD_DATA_TYPE == LOG_DATA_DRY) {
    loadScriptSync('src/scenes/data_dry.js')
}
else if (LOAD_DATA_TYPE == LOG_DATA_NOHUMOR) {
    loadScriptSync('src/scenes/data_nohumor.js')
}
else if (LOAD_DATA_TYPE == LOG_DATA_NOSNARK) {
    loadScriptSync('src/scenes/data_nosnark.js')
}
else if (LOAD_DATA_TYPE == LOG_DATA_NORMAL) {
    loadScriptSync('src/scenes/data.js')
}

