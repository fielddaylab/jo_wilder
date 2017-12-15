var Keyer = function(init)
{
  var default_init =
  {
    source:document.createElement('div')
  }

  var self = this;
  doMapInitDefaults(self,init,default_init);

  var keyables = [];
  var callbackQueue = [];
  var evtQueue = [];
  self.register = function(keyable) { keyables.push(keyable); }
  self.unregister = function(keyable) { var i = keyables.indexOf(keyable); if(i != -1) keyables.splice(i,1); }
  self.ignore = function() { callbackQueue = []; evtQueue = []; }
  self.clear = function() { keyables = []; }
  self.attach = function() //will get auto-called at creation
  {
    document.addEventListener('keypress', press, false);
    document.addEventListener('keydown', down, false);
    document.addEventListener('keyup', up, false);
  }
  self.detach = function()
  {
    document.removeEventListener('keypress', press);
    document.removeEventListener('keydown', down);
    document.removeEventListener('keyup', up);
  }

  function press(evt)
  {
    for(var i = 0; i < keyables.length; i++)
    {
      callbackQueue.push(keyables[i].key);
      evtQueue.push(evt);
    }

    var k = String.fromCharCode(evt.charCode).toLowerCase();
    if(k != "")
    {
      for(var i = 0; i < keyables.length; i++)
      {
        callbackQueue.push(keyables[i].key_letter);
        evtQueue.push(k);
      }
    }

    evt.preventDefault();
    return false;
  }
  function down(evt)
  {
    for(var i = 0; i < keyables.length; i++)
    {
      callbackQueue.push(keyables[i].key_down);
      evtQueue.push(evt);
    }

    if(evt.keyCode == 8) //prevent backspace
    {
      evt.preventDefault();
      return false;
    }
  }
  function up(evt)
  {
    for(var i = 0; i < keyables.length; i++)
    {
      callbackQueue.push(keyables[i].key_up);
      evtQueue.push(evt);
    }

    if(evt.keyCode == 8) //prevent backspace
    {
      evt.preventDefault();
      return false;
    }
  }
  self.flush = function()
  {
    for(var i = 0; i < callbackQueue.length; i++)
      callbackQueue[i](evtQueue[i]);
    callbackQueue = [];
    evtQueue = [];
  }

  self.attach();
}

//example keyable- just needs key callback
var Keyable = function(args)
{
  var self = this;

  self.key        = args.key        ? args.key        : function(){};
  self.key_letter = args.key_letter ? args.key_letter : function(){};
  self.key_down   = args.key_down   ? args.key_down   : function(){};
  self.key_up     = args.key_up     ? args.key_up     : function(){};
}

