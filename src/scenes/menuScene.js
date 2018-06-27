var MenuScene = function(game, stage)
{
  var self = this;

  var clicker;
  var blurer;
  var audio;

  var canv;
  var canvas;
  var ctx;
  self.resize = function(st)
  {
    stage = st;
    if(code_txt && code_txt.box_on) code_txt.blur();
    canv = stage.canv;
    if(code_txt) code_txt.canv = canv;
    canvas = canv.canvas;
    ctx = canv.context;

    if(clicker) clicker = new Clicker({source:canvas});
    if(blurer)  blurer  = new Blurer({source:canvas});

    if(pre_button)
    {
      var w = 200;
      pre_button.x = canv.width/2-w/2
      pre_button.y = canv.height/2+20;
    }

    var y = canv.height-100;
    if(audio_toggle) audio_toggle.y = y;
    if(hq_toggle) hq_toggle.y = y;
    if(fullscreen_toggle) fullscreen_toggle.y = y;

    ctx.font = text_font;
  }
  self.resize(stage);

  var pre_button;
  var new_button;
  var continue_button;
  var code_button;
  var code_txt;

  var audio_toggle;
  var hq_toggle;
  var fullscreen_toggle;

  var pre;
  var continuable;
  var code_valid;

  var next = 0;
  var next_t = 0;

  var poster_img;
  var logo_img;
  var check_img;
  var uncheck_img;
  var play_img;

  self.ready = function()
  {
    if(!clicker) clicker = new Clicker({source:canvas});
    if(!blurer)  blurer  = new Blurer({source:canvas});
    if(!audio) audio = GenAudio("assets/music_menu.mp3");
    audio.loop = true;

    poster_img  = GenImg("assets/poster.jpg");
    logo_img    = GenImg("assets/logo.png");
    check_img   = GenImg("assets/check.png");
    uncheck_img = GenImg("assets/uncheck.png");
    play_img    = GenImg("assets/play.png");

    var w = 200;
    var h = 50;
    pre_button = new ButtonBox(canv.width/2-w/2,canv.height/2+20,w,h,function(evt){ pre = 0; });
    w = 240;
    var x = 20;
    var y = 220;
    continue_button = new ButtonBox(x,y,w,h,function(evt){ if(!continuable) return; next = 1; }); y += h+10;
    new_button      = new ButtonBox(x,y,w,h,function(evt){ save_code = 0; setCookie("save", 0, 0); next = 1; }); y += h+10;
    y += h+10;
    code_txt        = new DomTextBox(x,y,w,h,canv,"",function(txt){ if(txt == "") { code_txt.bg_color = "rgba(255,255,255,0.1)"; code_valid = 0; return; } if(save_table[txt]) { code_txt.bg_color = "rgba(0,255,0,0.1)"; code_valid = 1; } else { code_txt.bg_color = "rgba(255,0,0,0.1)"; code_valid = 0; } }); x += w+10;
    code_button     = new ButtonBox(x,y,w,h,function(evt){ if(save_table[code_txt.txt]) { save_table_code = code_txt.txt; save_code = save_table[save_table_code].code; next = 1; } });

    w = 30;
    h = 30;
    x = 100;
    y = canv.height-100;
    audio_toggle      = new ToggleBox(x,y,w,h,AUDIO,function(o){ audio.pause(); AUDIO = o; if(!o && audio.playing) audio.pause(); if(o && !audio.playing) audio.play(); }); x += 200;
    hq_toggle         = new ToggleBox(x,y,w,h,!LOFI,function(o)
      {
        LOFI = !o;
        QUALITY = !LOFI;

        if(QUALITY)
        {
          stage = new Stage({width:stage.width,height:stage.height,container:stage.container});
          g.resize({stage:stage});
        }
        else
        {
          stage = new Stage({width:stage.width,height:stage.height,container:stage.container,bspr:2});
          g.resize({stage:stage});
        }
      }
    ); x += 200;
    fullscreen_toggle = new ToggleBox(x,y,w,h,0,function(o){ if(o) fullscreen(); }); x += 200;

    //THIS IS RIDICULOUS (the only way I could figure out how to ensure keyboard focus through iframe)
    code_txt.focus();
    code_txt.blur();

    next = 0;
    next_t = 0;
    pre = 1;
    continuable = save_code;
    code_valid = 0;
  };

  self.tick = function()
  {
    if(AUDIO && audio && game_first_audio_played && !audio.playing) audio.play();

    if(pre)
    {
      clicker.filter(pre_button);
    }
    else
    {
      if(next)
      {
        next_t += 0.01;
        if(next_t >= 1) { game.nextScene(); return; /*avoid flush*/ }
      }
      else
      {
        blurer.filter(code_txt);
        if(
          !clicker.filter(continue_button) &&
          !clicker.filter(new_button) &&
          !clicker.filter(code_txt) &&
          !clicker.filter(code_button) &&
          !clicker.filter(audio_toggle) &&
          !clicker.filter(hq_toggle) &&
          !clicker.filter(fullscreen_toggle) &&
          false)
          ;
      }
    }
    clicker.flush();
    blurer.flush();
  };

  self.draw = function()
  {
    ctx.drawImage(poster_img,0,0,canv.width,canv.height);

    if(pre)
    {
      var w = 400;
      var h = 200;
      ctx.drawImage(logo_img,canv.width/2-w/2,canv.height/2-h-20,w,h);
      drawImageBox(play_img,pre_button,ctx);
    }
    else
    {
      var w = 300;
      var h = 150;
      ctx.drawImage(logo_img,20,20,w,h);

      ctx.font = "48px Patrick";
      /*
      if(continuable) continue_button.draw(canv);
      new_button.draw(canv);
      code_button.draw(canv);
      */
      ctx.fillStyle = white;
      if(!continuable) ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.fillText("Continue",continue_button.x+15,continue_button.y+continue_button.h-10);
      ctx.fillStyle = white;
      ctx.fillText("New Game",new_button.x+15,new_button.y+new_button.h-10);
      code_txt.draw(canv);
      ctx.fillText("Enter Code:",new_button.x+15,new_button.y+new_button.h-10+10+new_button.h);
      if(!code_valid) ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.fillText("Go",code_button.x+15,code_button.y+code_button.h-10);
      ctx.fillStyle = white;

      /*
      audio_toggle.draw(canv);
      hq_toggle.draw(canv);
      fullscreen_toggle.draw(canv);
      */
      if(audio_toggle.on)      drawImageBox(  check_img,audio_toggle,ctx);
      else                     drawImageBox(uncheck_img,audio_toggle,ctx);
      if(hq_toggle.on)         drawImageBox(  check_img,hq_toggle,ctx);
      else                     drawImageBox(uncheck_img,hq_toggle,ctx);
      if(fullscreen_toggle.on) drawImageBox(  check_img,fullscreen_toggle,ctx);
      else                     drawImageBox(uncheck_img,fullscreen_toggle,ctx);
      ctx.font = text_font;
      ctx.fillText("Music FX",audio_toggle.x+audio_toggle.w+5,audio_toggle.y+audio_toggle.h-5);
      ctx.fillText("HQ Graphics",hq_toggle.x+hq_toggle.w+5,hq_toggle.y+hq_toggle.h-5);
      ctx.fillText("Fullscreen",fullscreen_toggle.x+fullscreen_toggle.w+5,fullscreen_toggle.y+fullscreen_toggle.h-5);

      if(next)
      {
        ctx.fillStyle = black;
        ctx.globalAlpha = next_t;
        ctx.fillRect(0,0,canv.width,canv.height);
        ctx.globalAlpha = 1;
      }
    }
  };

  self.cleanup = function()
  {
    clicker.detach();
    clicker = null;
    blurer.detach();
    blurer = null;
    audio.pause();
    audio = null;
  };
};
